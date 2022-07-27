import {inject, InjectionToken, NgZone} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiZoneOptimized, typedFromEvent} from '@taiga-ui/cdk';
import {tuiIsMobile} from '@taiga-ui/core/utils';
import {Observable} from 'rxjs';
import {distinctUntilChanged, map, share, startWith} from 'rxjs/operators';

import {TUI_MEDIA} from './media';

export const TUI_IS_MOBILE_RES = new InjectionToken<Observable<boolean>>(
    `Mobile resolution stream for private providers`,
    {
        factory: () => {
            const windowRef = inject(WINDOW);
            const media = inject(TUI_MEDIA);

            return typedFromEvent(windowRef, `resize`).pipe(
                share(),
                startWith(null),
                map(() => tuiIsMobile(windowRef, media)),
                distinctUntilChanged(),
                tuiZoneOptimized(inject(NgZone)),
            );
        },
    },
);
