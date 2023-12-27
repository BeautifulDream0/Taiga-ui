import {expect, Page} from '@playwright/test';

import {tuiMockDate} from './mock-date';
import {tuiWaitForFonts} from './wait-for-fonts';

interface TuiGotoOptions extends NonNullable<Parameters<Page['goto']>[1]> {
    date?: Date;
    hideHeader?: boolean;
    enableNightMode?: boolean;
    hideVersionManager?: boolean;
    hideLanguageSwitcher?: boolean;
}

export async function tuiGoto(
    page: Page,
    url: string,
    {
        date = new Date(2020, 8, 25, 19, 19),
        hideHeader = true,
        enableNightMode = false,
        hideVersionManager = false,
        hideLanguageSwitcher = false,
        ...playwrightGotoOptions
    }: TuiGotoOptions = {},
): ReturnType<Page['goto']> {
    await page.addInitScript(() => {
        globalThis.Math.random = () => 0.42;
    });
    await page.addInitScript(() =>
        globalThis.sessionStorage.setItem('playwright', 'true'),
    );

    if (enableNightMode) {
        await page.addInitScript(() =>
            globalThis.localStorage.setItem('tuiNight', 'true'),
        );
    }

    await tuiMockDate(page, date);

    const response = await page.goto(url, playwrightGotoOptions);

    await page.waitForLoadState('domcontentloaded');
    await page.waitForLoadState('load');

    await expect(page.locator('app')).toHaveClass(/_loaded/, {timeout: 15_000});
    await tuiWaitForFonts(page);

    if (hideHeader) {
        await page.locator('[tuidocheader]').evaluate(el => el.remove());
    }

    if (hideVersionManager) {
        await page.locator('version-manager').evaluate(el => el.remove());
    }

    if (hideLanguageSwitcher) {
        await page.locator('tui-language-switcher').evaluate(el => el.remove());
    }

    expect(
        await page.evaluate("matchMedia('(prefers-reduced-motion)').matches"),
    ).toBeTruthy();

    return response;
}
