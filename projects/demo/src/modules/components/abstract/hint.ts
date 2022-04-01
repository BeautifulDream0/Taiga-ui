import {TuiDirection, TuiHintModeT} from '@taiga-ui/core';

export abstract class AbstractExampleTuiHint {
    readonly modeVariants: readonly TuiHintModeT[] = ['error', 'onDark'];

    mode: TuiHintModeT | null = null;

    readonly directionVariants: readonly TuiDirection[] = [
        'left',
        'right',
        'bottom-left',
        'bottom-right',
        'top-left',
        'top-right',
    ];

    direction: TuiDirection = this.directionVariants[4];
}
