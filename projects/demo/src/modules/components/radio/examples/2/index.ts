import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-radio-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiRadioExample2 {
    testForm = new FormGroup({
        testValue1: new FormControl('One'),
        testValue2: new FormControl({value: 'One', disabled: true}),
    });
}
