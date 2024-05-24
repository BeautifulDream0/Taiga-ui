import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiLetDirective} from '@taiga-ui/cdk';
import {
    TuiDataList,
    TuiInitialsPipe,
    TuiLoaderComponent,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiAvatarComponent} from '@taiga-ui/kit';
import {TuiComboBoxModule} from '@taiga-ui/legacy';

import {databaseMockData} from './database-mock-data';
import {RequestService} from './request.service';

@Component({
    standalone: true,
    selector: 'tui-combo-box-example-2',
    imports: [
        AsyncPipe,
        NgIf,
        NgForOf,
        ReactiveFormsModule,
        TuiLetDirective,
        TuiComboBoxModule,
        TuiDataList,
        TuiAvatarComponent,
        TuiLoaderComponent,
        TuiInitialsPipe,
        TuiTextfieldControllerModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    providers: [RequestService],
})
export default class ExampleComponent {
    protected readonly service = inject(RequestService);

    protected search: string | null = '';

    protected readonly control = new FormControl(databaseMockData[0]);
}
