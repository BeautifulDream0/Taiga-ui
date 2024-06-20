import {AsyncPipe, NgIf, PercentPipe} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MutationObserverDirective} from '@ng-web-apis/mutation-observer';
import {ResizeObserverDirective} from '@ng-web-apis/resize-observer';
import {TuiPanDirective} from '@taiga-ui/cdk/directives/pan';
import {TuiZoom} from '@taiga-ui/cdk/directives/zoom';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiHint} from '@taiga-ui/core/directives/hint';
import {
    TuiSliderComponent,
    TuiSliderThumbLabelComponent,
} from '@taiga-ui/kit/components/slider';

import {TuiPreviewPaginationComponent} from './pagination/preview-pagination.component';
import {TuiPreviewComponent} from './preview.component';
import {TuiPreviewActionDirective} from './preview-action/preview-action.directive';
import {TuiPreviewTitleComponent} from './title/preview-title.component';
import {TuiPreviewZoomComponent} from './zoom/preview-zoom.component';

@NgModule({
    imports: [
        NgIf,
        TuiPanDirective,
        MutationObserverDirective,
        ResizeObserverDirective,
        TuiZoom,
        AsyncPipe,
        TuiButton,
        TuiSliderThumbLabelComponent,
        PercentPipe,
        TuiSliderComponent,
        FormsModule,
        ...TuiHint,
    ],
    declarations: [
        TuiPreviewComponent,
        TuiPreviewTitleComponent,
        TuiPreviewPaginationComponent,
        TuiPreviewActionDirective,
        TuiPreviewZoomComponent,
    ],
    exports: [
        TuiPreviewComponent,
        TuiPreviewActionDirective,
        TuiPreviewTitleComponent,
        TuiPreviewPaginationComponent,
        TuiPreviewZoomComponent,
        ...TuiHint,
    ],
})
export class TuiPreview {}
