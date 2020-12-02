import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';

import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';

import {default as example3Html} from '!!raw-loader!./examples/3/index.html';
import {default as example3Ts} from '!!raw-loader!./examples/3/index.ts';

import {default as example4Html} from '!!raw-loader!./examples/4/index.html';
import {default as example4Less} from '!!raw-loader!./examples/4/index.less';
import {default as example4Ts} from '!!raw-loader!./examples/4/index.ts';

import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {Component, Inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ALWAYS_FALSE_HANDLER, TuiBooleanHandler, TuiHandler} from '@taiga-ui/cdk';
import {TuiNotificationsService, TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

class ItemWithBadge {
    constructor(readonly text: string, readonly badgeValue?: number) {}

    toString(): string {
        return this.text;
    }

    valueOf(): number | null {
        return this.badgeValue ? this.badgeValue : null;
    }
}

@Component({
    selector: 'example-filters',
    templateUrl: './filter.template.html',
    changeDetection,
})
export class ExampleTuiFilterComponent {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
    };

    readonly example3: FrontEndExample = {
        TypeScript: example3Ts,
        HTML: example3Html,
    };

    readonly example4: FrontEndExample = {
        TypeScript: example4Ts,
        HTML: example4Html,
        LESS: example4Less,
    };

    initialItems = ['Александр Инкин', 'Роман Седов'];

    itemsVariants = [
        ['Александр Инкин', 'Роман Седов'],
        [
            new ItemWithBadge('Focused Zone', 10),
            new ItemWithBadge('Dropdown', 100),
            new ItemWithBadge('Menu Items', 30),
            new ItemWithBadge('Accordion'),
        ],
    ];

    badgeHandlerVariants: ReadonlyArray<TuiHandler<any, number>> = [
        item => Number(item),
        item => String(item).length,
    ];

    badgeHandler = this.badgeHandlerVariants[0];

    disabledItemHandlerVariants: ReadonlyArray<TuiBooleanHandler<any>> = [
        ALWAYS_FALSE_HANDLER,
        item => item === 'Роман Седов',
        item => item.valueOf() >= 30,
    ];

    disabledItemHandler = this.disabledItemHandlerVariants[0];

    items = this.itemsVariants[0];

    control = new FormControl(this.initialItems);

    readonly sizeVariants: ReadonlyArray<TuiSizeS | TuiSizeL> = ['s', 'm', 'l'];

    size: TuiSizeS | TuiSizeL = this.sizeVariants[1];

    constructor(
        @Inject(TuiNotificationsService)
        private readonly notifications: TuiNotificationsService,
    ) {}

    onToggledItemChange(item: any) {
        this.notifications.showNotification(String(item)).subscribe();
    }
}
