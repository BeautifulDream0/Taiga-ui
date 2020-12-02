import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TuiPluralize} from '@taiga-ui/core';
import {TuiKeySteps} from '@taiga-ui/kit';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-input-slider-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiInputSliderExample1 {
    testForm = new FormGroup({
        testValue: new FormControl(100000),
    });

    // 30 шагов по 5000, 16 шагов по 50 000, 58 шагов по 500 000 = 104 шага
    keySteps: TuiKeySteps = [
        [(100 / 104) * 30, 200000],
        [(100 / 104) * (30 + 16), 1000000],
    ];

    pluralize: TuiPluralize = ['₽', '₽', '₽'];
}
