import {AsyncPipe, NgIf} from '@angular/common';
import type {QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    forwardRef,
    HostBinding,
    HostListener,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {
    EMPTY_QUERY,
    tuiInjectElement,
    tuiIsNativeFocusedIn,
    tuiIsPresent,
    tuiMoveFocus,
    tuiPure,
    tuiQueryListChanges,
} from '@taiga-ui/cdk';
import {TUI_NOTHING_FOUND_MESSAGE} from '@taiga-ui/core/tokens';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';
import type {Observable} from 'rxjs';
import {map} from 'rxjs';

import type {TuiDataListAccessor} from './data-list.tokens';
import {TUI_DATA_LIST_HOST, tuiAsDataListAccessor} from './data-list.tokens';
import {TuiOptionComponent} from './option.component';

export function tuiInjectDataListSize(): TuiSizeL | TuiSizeS {
    const sizes = ['s', 'm', 'l'] as const;
    const size = inject(TUI_DATA_LIST_HOST, {optional: true})?.size;

    return size && sizes.includes(size) ? size : 'l';
}

// TODO: Consider aria-activedescendant for proper accessibility implementation
@Component({
    standalone: true,
    selector: 'tui-data-list',
    imports: [NgIf, AsyncPipe, PolymorpheusOutlet, PolymorpheusTemplate],
    templateUrl: './data-list.template.html',
    styleUrls: ['./data-list.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiAsDataListAccessor(TuiDataListComponent)],
    host: {
        role: 'listbox',
    },
})
export class TuiDataListComponent<T> implements TuiDataListAccessor<T> {
    @ContentChildren(forwardRef(() => TuiOptionComponent), {descendants: true})
    private readonly options: QueryList<TuiOptionComponent<T>> = EMPTY_QUERY;

    private origin?: HTMLElement;
    private readonly el = tuiInjectElement();

    protected readonly defaultEmptyContent$ = inject(TUI_NOTHING_FOUND_MESSAGE);

    @Input()
    public emptyContent: PolymorpheusContent;

    @Input()
    @HostBinding('attr.data-size')
    public size = tuiInjectDataListSize();

    @HostListener('keydown.arrowDown.prevent', ['$event.target', '1'])
    @HostListener('keydown.arrowUp.prevent', ['$event.target', '-1'])
    public onKeyDownArrow(current: HTMLElement, step: number): void {
        const {elements} = this;

        tuiMoveFocus(elements.indexOf(current), elements, step);
    }

    @HostListener('wheel.silent.passive')
    @HostListener('mouseleave', ['$event.target'])
    @HostListener('keydown.tab')
    @HostListener('keydown.shift.tab')
    public handleFocusLossIfNecessary(element: Element = this.el): void {
        if (tuiIsNativeFocusedIn(element)) {
            this.origin?.focus({preventScroll: true});
        }
    }

    public getOptions(includeDisabled = false): readonly T[] {
        return this.options
            .filter(({disabled}) => includeDisabled || !disabled)
            .map(({value}) => value)
            .filter(tuiIsPresent);
    }

    @tuiPure
    protected get empty$(): Observable<boolean> {
        return tuiQueryListChanges(this.options).pipe(map(({length}) => !length));
    }

    @HostListener('focusin', ['$event.relatedTarget', '$event.currentTarget'])
    protected onFocusIn(relatedTarget: HTMLElement, currentTarget: HTMLElement): void {
        if (!currentTarget.contains(relatedTarget) && !this.origin) {
            this.origin = relatedTarget;
        }
    }

    @HostListener('mousedown.prevent')
    protected noop(): void {}

    private get elements(): readonly HTMLElement[] {
        return Array.from(
            this.el.querySelectorAll('a[tuiOption],button[tuiOption],input'),
        );
    }
}
