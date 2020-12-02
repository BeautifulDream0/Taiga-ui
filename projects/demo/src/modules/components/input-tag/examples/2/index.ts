import {Component} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {delay, startWith, switchMap} from 'rxjs/operators';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

const databaseMockData: ReadonlyArray<string> = [
    'John Cleese',
    'Eric Idle',
    'Michael Palin',
    'Terry Gilliam',
    'Terry Jones',
    'Graham Chapman',
];

@Component({
    selector: 'tui-input-tag-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiInputTagExample2 {
    private readonly search$ = new Subject<string>();

    value = [];

    readonly items$ = this.search$.pipe(
        switchMap(search =>
            this.serverRequest(search).pipe(
                startWith<ReadonlyArray<string> | null>(null),
            ),
        ),
        startWith(databaseMockData),
    );

    onSearchChange(search: string) {
        this.search$.next(search);
    }

    /**
     * Имитация запроса на сервер
     */
    private serverRequest(search: string): Observable<ReadonlyArray<string>> {
        const result = databaseMockData.filter(
            item => item.toLowerCase().indexOf(search.toLowerCase()) !== -1,
        );

        return of(result).pipe(delay(Math.random() * 1000 + 500));
    }
}
