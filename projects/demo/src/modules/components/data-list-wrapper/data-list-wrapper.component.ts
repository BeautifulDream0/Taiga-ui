import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: 'example-tui-data-list-wrapper',
    templateUrl: './data-list-wrapper.template.html',
    changeDetection,
})
export class ExampleTuiDataListWrapperComponent {
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');

    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1 = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly example2 = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
    };

    protected readonly example3 = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
    };
}
