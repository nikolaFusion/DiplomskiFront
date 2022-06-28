import { Directive, OnDestroy } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Directive()
export abstract class CommonComponent implements OnDestroy {
  ngUnsubscribe: Subject<any> = new Subject<any>();
  spinnerVisible: boolean;

  constructor() {}

  ngOnDestroy(): void {
    this.ngUnsubscribe.next('');
    this.ngUnsubscribe.complete();
  }

  canDeactivateComponent(): Observable<boolean> {
    return of(true);
  }
}
