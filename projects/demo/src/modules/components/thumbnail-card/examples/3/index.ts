import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiPaymentSystem} from '@taiga-ui/addon-commerce';

@Component({
    selector: 'tui-thumbnail-card-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiThumbnailCardExample3 {
    protected readonly paymentSystem: TuiPaymentSystem = 'mir';
    protected readonly brandLogo =
        'https://ng-web-apis.github.io/dist/assets/images/web-api.svg';
}
