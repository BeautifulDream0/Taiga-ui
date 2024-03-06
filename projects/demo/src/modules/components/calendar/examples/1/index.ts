import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiDay} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-calendar-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiCalendarExample1 {
    protected value: TuiDay | null = null;

    protected onDayClick(day: TuiDay): void {
        this.value = day;
    }
}
