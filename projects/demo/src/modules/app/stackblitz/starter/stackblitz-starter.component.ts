import {isPlatformBrowser} from '@angular/common';
import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject, PLATFORM_ID} from '@angular/core';
import {tuiRawLoad, tuiTryParseMarkdownCodeBlock} from '@taiga-ui/addon-doc';

import {TuiStackblitzService} from '../stackblitz.service';
import {appPrefix} from '../utils';

@Component({
    selector: 'demo-stackblitz-starter',
    templateUrl: './stackblitz-starter.component.html',
    styleUrls: ['./stackblitz-starter.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiStackblitzService],
})
export class StackblitzStarterComponent implements OnInit {
    private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    private readonly stackblitz = inject(TuiStackblitzService);

    public async ngOnInit(): Promise<void> {
        if (this.isBrowser) {
            await this.openStackblitz();
        }
    }

    protected async openStackblitz(): Promise<void> {
        const [appTemplate, appComponent, indexHtml, stylesLess] = await Promise.all(
            [
                import('./files/app.component.html.md?raw'),
                import('./files/app.component.ts.md?raw'),
                import('./files/index.html.md?raw'),
                import('./files/styles.less.md?raw'),
            ].map(tuiRawLoad),
        ).then(markdowns => markdowns.map(md => tuiTryParseMarkdownCodeBlock(md)[0]));

        return this.stackblitz.openStarter(
            {
                title: 'Taiga UI Starter',
                description:
                    'A starter with Taiga UI library\nDocumentation: https://taiga-ui.dev',
                files: {
                    'src/index.html': indexHtml,
                    'src/styles.less': stylesLess,
                    [appPrefix`app.component.html`]: appTemplate,
                    [appPrefix`app.component.ts`]: appComponent,
                    [appPrefix`app.component.less`]:
                        "@import '@taiga-ui/core/styles/taiga-ui-local.less';",
                },
            },
            {
                newWindow: false,
                openFile: appPrefix`app.component.html`,
                hideExplorer: true,
            },
        );
    }
}
