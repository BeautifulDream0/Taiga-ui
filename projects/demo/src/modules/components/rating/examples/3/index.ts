import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRatingComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiRatingComponent, FormsModule],
    templateUrl: 'index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
