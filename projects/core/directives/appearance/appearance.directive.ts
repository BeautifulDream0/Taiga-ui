import {Directive, inject, Input} from '@angular/core';
import type {TuiInteractiveState} from '@taiga-ui/core/interfaces';

import {TUI_APPEARANCE_OPTIONS} from './appearance.options';

@Directive({
    standalone: true,
    selector: '[tuiAppearance]',
    host: {
        tuiAppearance: '',
        '[attr.data-appearance]': 'tuiAppearance',
        '[attr.data-state]': 'tuiAppearanceState',
        '[attr.data-focus]': 'tuiAppearanceFocus',
    },
})
export class TuiAppearanceDirective {
    @Input()
    public tuiAppearance = inject(TUI_APPEARANCE_OPTIONS).appearance;

    @Input()
    public tuiAppearanceState: TuiInteractiveState | null = null;

    @Input()
    public tuiAppearanceFocus: boolean | null = null;
}
