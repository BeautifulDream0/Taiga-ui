import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {RawLoaderContent, TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiSizeL, TuiSizeXS} from '@taiga-ui/core';

@Component({
    selector: 'example-badge-alert',
    templateUrl: './badge-alert.template.html',
    changeDetection,
})
export class ExampleTuiBadgeAlertComponent {
    readonly exampleModule: RawLoaderContent = import(
        './examples/import/import-module.md?raw'
    );

    readonly exampleHtml: RawLoaderContent = import(
        './examples/import/insert-template.md?raw'
    );

    readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
    };

    readonly example2: TuiDocExample = {
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeXS> = ['l', 'm', 's', 'xs'];

    size: TuiSizeL | TuiSizeXS = this.sizeVariants[0];
}
