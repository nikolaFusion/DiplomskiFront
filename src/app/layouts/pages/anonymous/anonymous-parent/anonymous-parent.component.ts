import { Component, OnInit } from '@angular/core';
import { CommonComponent } from 'src/app/models/base/common.component';
import { CurrentRouteService } from 'src/app/services/routes-resolver/current-route.service';

@Component({
  selector: 'app-anonymous-parent',
  templateUrl: './anonymous-parent.component.html',
  styleUrls: ['./anonymous-parent.component.scss'],
})
export class AnonymousParentComponent
  extends CommonComponent
  implements OnInit
{
  constructor(private currentRouteService: CurrentRouteService) {
    super();
  }
  ngOnInit() {}

  childActivated(activatedComponent: CommonComponent) {
    this.currentRouteService.setCurrentActiveRoute(activatedComponent);
  }
}
