import {Locator} from '@playwright/test';

export class TuiInputMonthRangePO {
    protected readonly textfield: Locator = this.host.getByRole('textbox');

    constructor(private readonly host: Locator) {}
}
