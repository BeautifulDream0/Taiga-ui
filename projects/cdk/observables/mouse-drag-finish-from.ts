import {type TuiEventWith, type TuiTypedEventTarget} from '@taiga-ui/cdk/types';
import {merge, type Observable} from 'rxjs';

import {tuiTypedFromEvent} from './typed-from-event';

/**
 * Letting go of the mouse after it was pressed
 * @param target
 */
export function tuiMouseDragFinishFrom<
    T extends TuiTypedEventTarget<TuiEventWith<DragEvent, T>>,
>(target: Exclude<T, null>): Observable<TuiEventWith<MouseEvent, T>> {
    return merge(
        tuiTypedFromEvent(target, 'mouseup'),
        tuiTypedFromEvent(target, 'dragend'),
    );
}
