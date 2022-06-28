import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonComponent } from '../../models/base/common.component';

@Injectable({
  providedIn: 'root',
})
export class CurrentRouteService {
  constructor() {}

  private currentActiveRouteComponent: CommonComponent;

  public canDeactivateCurrentActiveRoute(): Observable<boolean> {
    return this.currentActiveRouteComponent.canDeactivateComponent();
  }

  public setCurrentActiveRoute(commonComponent: CommonComponent) {
    this.currentActiveRouteComponent = commonComponent;
  }
}
