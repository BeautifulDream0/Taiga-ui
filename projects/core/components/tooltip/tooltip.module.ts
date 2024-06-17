import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiAppearanceDirective} from '@taiga-ui/core/directives';
import {TuiHint} from '@taiga-ui/core/directives/hint';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TuiTooltipComponent} from './tooltip.component';

@NgModule({
    imports: [
        CommonModule,
        TuiIcon,
        TuiHint,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiAppearanceDirective,
    ],
    declarations: [TuiTooltipComponent],
    exports: [TuiTooltipComponent],
})
export class TuiTooltip {}
