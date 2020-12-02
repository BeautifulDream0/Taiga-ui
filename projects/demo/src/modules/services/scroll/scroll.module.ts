import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiElementModule, TuiScrollService} from '@taiga-ui/cdk';
import {TuiButtonModule, TuiScrollbarModule} from '@taiga-ui/core';
import {TuiInputCountModule} from '@taiga-ui/kit';
import {TuiScrollExample1} from './examples/1';
import {ExampleTuiScrollComponent} from './scroll.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TuiElementModule,
        TuiInputCountModule,
        TuiButtonModule,
        TuiScrollbarModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiScrollComponent)),
    ],
    declarations: [ExampleTuiScrollComponent, TuiScrollExample1],
    exports: [ExampleTuiScrollComponent],
    providers: [TuiScrollService],
})
export class ExampleTuiScrollModule {}
