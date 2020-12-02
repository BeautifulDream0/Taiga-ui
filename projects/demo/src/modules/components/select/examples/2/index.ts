import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TuiCurrency} from '@taiga-ui/addon-commerce';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

class Card {
    constructor(readonly cardName: string, readonly cardNumber: string) {}
}

class Account {
    constructor(
        readonly id: string,
        readonly name: string,
        readonly amount: number,
        readonly currency: TuiCurrency,
    ) {}
}

@Component({
    selector: 'tui-select-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiSelectExample2 {
    cards = [
        new Card('Bitcoin', '*6713'),
        new Card('Money', '*4562'),
        new Card('Charity', '*6788'),
        new Card('Subscriptions', '*1231'),
    ];

    accounts = [
        new Account('1', 'RUB', 24876.55, TuiCurrency.Ruble),
        new Account('2', 'USD', 335, TuiCurrency.Dollar),
        new Account('3', 'EUR', 10000, TuiCurrency.Euro),
        new Account('4', 'PND', 100, TuiCurrency.Pound),
    ];

    testForm = new FormGroup({
        testValue: new FormControl(null),
        accounts: new FormControl(null),
    });
}
