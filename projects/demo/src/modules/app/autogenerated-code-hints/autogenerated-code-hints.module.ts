import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TUI_DOC_CODE_ACTIONS} from '@taiga-ui/addon-doc';
import {
    TuiButtonModule,
    TuiDropdownModule,
    TuiHostedDropdownModule,
    TuiLinkModule,
} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {TuiAutoGeneratedCodeHintsComponent} from './autogenerated-code-hints.component';

@NgModule({
    imports: [
        CommonModule,
        TuiLinkModule,
        TuiButtonModule,
        TuiHostedDropdownModule,
        TuiDropdownModule,
        RouterModule,
    ],
    declarations: [TuiAutoGeneratedCodeHintsComponent],
    providers: [
        {
            provide: TUI_DOC_CODE_ACTIONS,
            useValue: new PolymorpheusComponent(TuiAutoGeneratedCodeHintsComponent),
            multi: true,
        },
    ],
    exports: [TuiAutoGeneratedCodeHintsComponent],
})
export class TuiAutoGeneratedCodeHintsModule {}
