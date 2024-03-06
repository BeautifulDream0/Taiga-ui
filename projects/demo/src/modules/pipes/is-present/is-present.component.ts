import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-tui-is-present',
    templateUrl: './is-present.template.html',
    changeDetection,
})
export class ExampleTuiIsPresentComponent {
    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/component.ts?raw'),
        HTML: import('./examples/1/template.html?raw'),
    };
}
