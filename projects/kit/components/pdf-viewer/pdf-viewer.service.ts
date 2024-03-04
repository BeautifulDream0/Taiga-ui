import {inject, Injectable} from '@angular/core';
import {type SafeResourceUrl} from '@angular/platform-browser';
import {type TuiPopoverContext, TuiPopoverService} from '@taiga-ui/cdk';
import {TUI_DIALOGS} from '@taiga-ui/core';
import {type PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {type Observable} from 'rxjs';

import {TuiPdfViewerComponent} from './pdf-viewer.component';
import {TUI_PDF_VIEWER_OPTIONS, type TuiPdfViewerOptions} from './pdf-viewer.options';

type Content<G> = PolymorpheusContent<
    TuiPdfViewerOptions<unknown> & TuiPopoverContext<G>
>;

@Injectable({
    providedIn: 'root',
    useFactory: () =>
        new TuiPdfViewerService(
            TUI_DIALOGS,
            TuiPdfViewerComponent,
            inject(TUI_PDF_VIEWER_OPTIONS),
        ),
})
export class TuiPdfViewerService extends TuiPopoverService<TuiPdfViewerOptions<unknown>> {
    public override open<G>(
        content: Content<G> | SafeResourceUrl,
        options: Partial<TuiPdfViewerOptions<any>> = {},
    ): Observable<G> {
        return super.open(content as Content<G>, options);
    }
}
