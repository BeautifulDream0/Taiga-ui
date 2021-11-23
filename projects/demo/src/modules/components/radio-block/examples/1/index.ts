import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-radio-block-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiRadioBlockExample1 {
    readonly testForm = new FormGroup({
        testValue: new FormControl('orange'),
    });
}
