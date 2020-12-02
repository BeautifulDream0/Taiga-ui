import {ChangeDetectorRef, Optional, Provider} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {TuiModeDirective} from '@taiga-ui/core/directives/mode';
import {TUI_MODE} from '@taiga-ui/core/tokens';
import {modeFactory} from '@taiga-ui/core/utils/miscellaneous';

export const MODE_PROVIDER: Provider = {
    provide: TUI_MODE,
    deps: [TuiDestroyService, ChangeDetectorRef, [new Optional(), TuiModeDirective]],
    useFactory: modeFactory,
};
