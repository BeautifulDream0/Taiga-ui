import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiSwipe} from '@taiga-ui/cdk';
import {Subject} from 'rxjs';

@Component({
    selector: 'tui-swipe-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiSwipeExample2 {
    protected readonly open$ = new Subject<boolean>();

    protected toggle(open: boolean): void {
        this.open$.next(open);
    }

    protected onSwipe(swipe: TuiSwipe): void {
        console.info(swipe.direction);

        if (swipe.direction === 'left') {
            this.toggle(true);
        }

        if (swipe.direction === 'right') {
            this.toggle(false);
        }
    }
}
