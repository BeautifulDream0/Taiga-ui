import {readdirSync, readFileSync, statSync, writeFileSync} from 'node:fs';
import {basename, join} from 'node:path';

(function main(): void {
    generateProjectsUsedIcons();
    generateDemoUsedIcons();
})();

function generateProjectsUsedIcons(): void {
    const rootDirectory = process.env.ROOT_FOLDER || './projects';
    const excludedFolders = [
        'demo',
        'demo-cypress',
        'eslint-plugin',
        'taiga-schematics',
        'testing',
        'test',
        'i18n',
        'icons',
        'schematics',
    ];
    const excludedFiles = ['deprecated-icons.ts', 'used-icons.ts'];
    const excludedNames = ['tuiIconButton'];

    generateUsedIcons(rootDirectory, {excludedFolders, excludedNames, excludedFiles});
}

function generateDemoUsedIcons(): void {
    const rootDirectory = process.env.ROOT_DEMO_FOLDER || './projects/demo';
    const excludedFiles = ['used-icons.ts'];

    generateUsedIcons(rootDirectory, {
        excludedFiles,
        writeTo: './projects/demo/used-icons.ts',
    });
}

function generateUsedIcons(
    rootDirectory: string,
    {
        excludedFolders = [],
        excludedNames = [],
        excludedFiles = [],
        writeTo = './projects/cdk/constants/used-icons.ts',
    }: {
        excludedFiles?: string[];
        excludedFolders?: string[];
        excludedNames?: string[];
        writeTo?: string;
    },
): void {
    const tuiIconNames = findTuiIconNames(rootDirectory, {
        excludedFolders,
        excludedNames,
        excludedFiles,
    });

    writeFileSync(
        writeTo,
        `/**
 * @description:
 * AUTOGENERATED
 *
 * Array of icons used in taiga-ui components
 */
 export const TUI_USED_ICONS = ${JSON.stringify(tuiIconNames)} as const`,
    );
}

function findTuiIconNames(
    rootDir: string,
    {
        excludedFolders,
        excludedNames,
        excludedFiles,
    }: {excludedFiles: string[]; excludedFolders: string[]; excludedNames: string[]},
): string[] {
    const tuiIconNames = new Set<string>();

    function traverseDirectory(directory: string): void {
        const files = readdirSync(directory);

        for (const file of files) {
            const filePath = join(directory, file);
            const stat = statSync(filePath);

            if (stat.isDirectory()) {
                const folderName = basename(filePath);

                if (!excludedFolders.includes(folderName)) {
                    traverseDirectory(filePath);
                }
            } else if (stat.isFile()) {
                const fileName = basename(filePath);

                if (excludedFiles.includes(fileName)) {
                    return;
                }

                const fileContents = readFileSync(filePath, 'utf-8');
                const tuiIconMatches = fileContents.match(
                    /@tui\.[a-zA-Z0-9-]+(?=['"`])/g,
                );

                if (tuiIconMatches) {
                    tuiIconMatches.forEach(match => {
                        if (!excludedNames.includes(match)) {
                            tuiIconNames.add(match);
                        }
                    });
                }
            }
        }
    }

    traverseDirectory(rootDir);

    return Array.from(tuiIconNames);
}
