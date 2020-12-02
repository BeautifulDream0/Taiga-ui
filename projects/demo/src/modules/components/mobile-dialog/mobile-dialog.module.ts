import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {generateRoutes, TUI_DOC_PAGE_MODULES} from '@taiga-ui/addon-doc';
import {TuiMobileDialogModule} from '@taiga-ui/addon-mobile';
import {TuiButtonModule} from '@taiga-ui/core';
import {TuiMobileDialogExample1} from './examples/1';
import {ExampleTuiMobileDialogComponent} from './mobile-dialog.component';

@NgModule({
    imports: [
        CommonModule,
        TuiMobileDialogModule,
        TuiButtonModule,
        ...TUI_DOC_PAGE_MODULES,
        RouterModule.forChild(generateRoutes(ExampleTuiMobileDialogComponent)),
    ],
    declarations: [ExampleTuiMobileDialogComponent, TuiMobileDialogExample1],
    exports: [ExampleTuiMobileDialogComponent],
})
export class ExampleTuiMobileDialogModule {}
