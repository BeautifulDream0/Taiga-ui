import {Directive, ElementRef, Inject, Input} from '@angular/core';
import {tuiDefaultProp, tuiRequiredSetter} from '@taiga-ui/cdk';
import {AbstractTuiHint} from '@taiga-ui/core/abstract';
import {TuiHintService} from '@taiga-ui/core/services';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Directive({
    selector: '[tuiManualHint]:not(ng-container)',
})
export class TuiManualHintDirective extends AbstractTuiHint {
    @Input('tuiManualHint')
    @tuiDefaultProp()
    content: PolymorpheusContent = '';

    @Input()
    @tuiRequiredSetter()
    set tuiManualHintShow(show: boolean) {
        if (show) {
            this.showTooltip();
        } else {
            this.hideTooltip();
        }
    }

    constructor(
        @Inject(ElementRef) elementRef: ElementRef<HTMLElement>,
        @Inject(TuiHintService) hintService: TuiHintService,
    ) {
        super(elementRef, hintService);
    }

    getElementClientRect(): ClientRect {
        return this.elementRef.nativeElement.getBoundingClientRect();
    }
}
