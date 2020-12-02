import {Component} from '@angular/core';
import {
    TuiContextWithImplicit,
    TuiIdentityMatcher,
    TuiStringHandler,
} from '@taiga-ui/cdk';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

const INCOME = {
    name: 'Income',
    items: [
        'Donations',
        'Product placement',
        'Sponsorship',
        'Found on the street',
        'Unexpected inheritance',
        'Investments',
        'Color copier',
    ],
};

const EXPENSES = {
    name: 'Expenses',
    items: [
        'Energy drinks',
        'Coffee',
        'Ramen',
        'Bills',
        'Back medicine',
        'Warhammer 40000 figurines',
    ],
};

@Component({
    selector: 'tui-data-list-example-4',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
    styles: ['.control { width: 320px }'],
})
export class TuiDataListExample4 {
    value = [];

    readonly items = [INCOME, EXPENSES];

    readonly identityMatcher: TuiIdentityMatcher<ReadonlyArray<string>> = (
        items1,
        items2,
    ) =>
        items1.length === items2.length &&
        items1.every(item => items2.indexOf(item) !== -1);

    readonly valueContent: TuiStringHandler<
        TuiContextWithImplicit<ReadonlyArray<string>>
    > = ({$implicit}) => {
        if (!$implicit.length) {
            return 'All';
        }

        const selected = this.items.find(({items}) =>
            this.identityMatcher($implicit, items),
        );

        return selected ? `${selected.name} only` : `Selected: ${$implicit.length}`;
    };
}
