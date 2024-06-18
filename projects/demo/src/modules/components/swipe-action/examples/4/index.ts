import {AsyncPipe, NgIf} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiSwipeActions} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiSurface, TuiTitleDirective} from '@taiga-ui/core';
import {TuiAvatarComponent, TuiCheckboxComponent} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCellDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiSwipeActions,
        TuiSurface,
        TuiCellDirective,
        TuiCardLarge,
        TuiAvatarComponent,
        TuiTitleDirective,
        TuiAmountPipe,
        AsyncPipe,
        NgIf,
        TuiButton,
        TuiCheckboxComponent,
        FormsModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected shareButton = false;
    protected editButton = true;
}
