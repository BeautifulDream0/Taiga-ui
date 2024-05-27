import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTextfieldControllerModule} from '@taiga-ui/core';
import {
    TuiDataListWrapperModule,
    TuiFilterByInputPipeModule,
    TuiStringifyContentPipeModule,
} from '@taiga-ui/kit';
import {TuiComboBoxModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [
        TuiComboBoxModule,
        ReactiveFormsModule,
        TuiTextfieldControllerModule,
        TuiDataListWrapperModule,
        TuiStringifyContentPipeModule,
        TuiFilterByInputPipeModule,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly control = new FormControl<{name: string; surname: string} | null>(
        null,
    );

    protected readonly items = [
        {name: 'John', surname: 'Cleese'},
        {name: 'Eric', surname: 'Idle'},
        {name: 'Graham', surname: 'Chapman'},
        {name: 'Michael', surname: 'Palin'},
        {name: 'Terry', surname: 'Gilliam'},
        {name: 'Terry', surname: 'Jones'},
    ];

    protected readonly stringify = (item: {name: string; surname: string}): string =>
        `${item.name} ${item.surname}`;
}
