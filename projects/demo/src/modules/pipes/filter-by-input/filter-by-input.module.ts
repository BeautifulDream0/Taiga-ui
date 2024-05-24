import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc, tuiGenerateRoutes} from '@taiga-ui/addon-doc';
import {TuiDataList, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {
    TuiDataListWrapperModule,
    TuiFilterByInputPipeModule,
    TuiStringifyContentPipeModule,
} from '@taiga-ui/kit';
import {TuiComboBoxModule, TuiInputModule, TuiMultiSelectModule} from '@taiga-ui/legacy';

import {TuiFilterByInputExample1} from './examples/1';
import {TuiFilterByInputExample2} from './examples/2';
import {TuiFilterByInputExample3} from './examples/3';
import {ExampleTuiFilterByInputComponent} from './filter-by-input.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        TuiFilterByInputPipeModule,
        TuiAddonDoc,
        TuiInputModule,
        TuiDataList,
        TuiDataListWrapperModule,
        TuiComboBoxModule,
        TuiMultiSelectModule,
        TuiTextfieldControllerModule,
        TuiStringifyContentPipeModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiFilterByInputComponent)),
    ],
    declarations: [
        ExampleTuiFilterByInputComponent,
        TuiFilterByInputExample1,
        TuiFilterByInputExample2,
        TuiFilterByInputExample3,
    ],
    exports: [ExampleTuiFilterByInputComponent],
})
export class ExampleTuiFilterByInputModule {}
