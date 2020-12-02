import {Component, Inject, Injector} from '@angular/core';
import {TuiDialogService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';
import {DialogExampleComponent} from '../../dialog-example/dialog-example.component';

@Component({
    selector: 'tui-dialog-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiDialogExampleComponent1 {
    private readonly dialog = this.dialogService.open<boolean>(
        new PolymorpheusComponent(DialogExampleComponent, this.injector),
        {dismissible: true, label: 'Да?'},
    );

    constructor(
        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
        @Inject(Injector) private readonly injector: Injector,
    ) {}

    showDialog() {
        this.dialog.subscribe({
            next: data => {
                console.log('Dialog emitted data = ' + data);
            },
            complete: () => {
                console.log('Dialog closed');
            },
        });
    }
}
