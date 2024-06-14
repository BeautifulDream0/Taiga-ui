import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiAutoFocusDirective} from '@taiga-ui/cdk';
import {TuiButtonDirective} from '@taiga-ui/core/components/button';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiDialogComponent} from './dialog.component';
import {TuiDialogDirective} from './dialog.directive';

@NgModule({
    imports: [
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiButtonDirective,
        CommonModule,
        TuiAutoFocusDirective,
    ],
    declarations: [TuiDialogComponent, TuiDialogDirective],
    exports: [TuiDialogComponent, TuiDialogDirective],
})
export class TuiDialogModule {}
