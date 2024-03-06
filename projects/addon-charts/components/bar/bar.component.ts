import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import type {SafeValue} from '@angular/platform-browser';
import {tuiPure, tuiSum} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';

@Component({
    selector: 'tui-bar',
    templateUrl: './bar.template.html',
    styleUrls: ['./bar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiBarComponent {
    @Input()
    public value: readonly number[] = [];

    @Input()
    @HostBinding('attr.data-size')
    public size: TuiSizeL | TuiSizeS = 'm';

    protected getHeight(value: number): number {
        return (100 * value) / this.getSum(this.value);
    }

    protected getColor(index: number): SafeValue {
        return `var(--tui-chart-${index})`;
    }

    @tuiPure
    private getSum(value: readonly number[]): number {
        return tuiSum(...value);
    }
}
