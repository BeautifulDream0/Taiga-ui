import {ChangeDetectorRef, Directive, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {
    INTERSECTION_THRESHOLD,
    IntersectionObserverService,
} from '@ng-web-apis/intersection-observer';
import {tuiWatch} from '@taiga-ui/cdk';
import {catchError, distinctUntilChanged, EMPTY, map} from 'rxjs';

// TODO: Consider making universal and moving to CDK
@Directive({
    standalone: true,
    selector: 'tui-stuck:never',
    providers: [
        IntersectionObserverService,
        {
            provide: INTERSECTION_THRESHOLD,
            useValue: [0, 1],
        },
    ],
    host: {'[class._stuck]': 'stuck()'},
})
export class TuiStuck {
    protected readonly stuck = toSignal(
        inject(IntersectionObserverService).pipe(
            map(entries => entries[entries.length - 1].intersectionRatio < 1),
            distinctUntilChanged(),
            tuiWatch(inject(ChangeDetectorRef)),
            catchError(() => EMPTY), // SSR
        ),
    );
}
