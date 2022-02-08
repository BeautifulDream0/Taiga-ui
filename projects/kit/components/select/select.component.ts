import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    Inject,
    Input,
    Optional,
    Self,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiNullableControl,
    isNativeFocused,
    setNativeFocused,
    TUI_DEFAULT_IDENTITY_MATCHER,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    TuiIdentityMatcher,
    tuiPure,
} from '@taiga-ui/cdk';
import {
    TUI_TEXTFIELD_CLEANER,
    TuiDataListDirective,
    TuiDataListHost,
    TuiHostedDropdownComponent,
    TuiPrimitiveTextfieldComponent,
    TuiTextfieldCleanerDirective,
    TuiValueContentContext,
} from '@taiga-ui/core';
import {TUI_ARROW_MODE, TuiArrowMode} from '@taiga-ui/kit/components/arrow';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TUI_SELECT_PROVIDERS} from './select.providers';

@Component({
    selector: 'tui-select',
    templateUrl: './select.template.html',
    styleUrls: ['./select.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_SELECT_PROVIDERS,
})
export class TuiSelectComponent<T>
    extends AbstractTuiNullableControl<T>
    implements TuiFocusableElementAccessor, TuiDataListHost<T>
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    @ViewChild(TuiHostedDropdownComponent)
    private readonly hostedDropdown?: TuiHostedDropdownComponent;

    @Input()
    @tuiDefaultProp()
    identityMatcher: TuiIdentityMatcher<T | string> = TUI_DEFAULT_IDENTITY_MATCHER;

    @Input()
    @tuiDefaultProp()
    valueContent: PolymorpheusContent<TuiValueContentContext<T>> = '';

    @ContentChild(TuiDataListDirective, {read: TemplateRef})
    readonly datalist: PolymorpheusContent = '';

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_TEXTFIELD_CLEANER)
        private readonly textfieldCleaner: TuiTextfieldCleanerDirective,
        @Inject(TUI_ARROW_MODE)
        private readonly arrowMode: TuiArrowMode,
    ) {
        super(control, changeDetectorRef);
    }

    get arrow(): PolymorpheusContent {
        return !this.interactive ? this.arrowMode.disabled : this.arrowMode.interactive;
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return this.textfield ? this.textfield.nativeFocusableElement : null;
    }

    get focused(): boolean {
        return (
            isNativeFocused(this.nativeFocusableElement) ||
            (!!this.hostedDropdown && this.hostedDropdown.focused)
        );
    }

    get computedValue(): string {
        return this.value === null ? '' : String(this.value) || ' ';
    }

    get computedContent(): PolymorpheusContent<TuiValueContentContext<T>> {
        return this.valueContent || this.computedValue;
    }

    @tuiPure
    computeContext(
        $implicit: T | null,
        active: boolean,
    ): TuiValueContentContext<T | null> {
        return {$implicit, active};
    }

    onValueChange(value: string) {
        if (!value) {
            this.updateValue(null);
        }
    }

    onActiveZone(active: boolean) {
        this.updateFocused(active);
    }

    onHovered(hovered: boolean) {
        this.updateHovered(hovered);
    }

    onKeyDownDelete() {
        if (this.textfieldCleaner.cleaner) {
            this.updateValue(null);
        }
    }

    handleOption(option: T) {
        this.focusInput();
        this.updateValue(option);
        this.hostedDropdown?.updateOpen(false);
    }

    private focusInput(preventScroll: boolean = false) {
        if (this.nativeFocusableElement) {
            setNativeFocused(this.nativeFocusableElement, true, preventScroll);
        }
    }
}
