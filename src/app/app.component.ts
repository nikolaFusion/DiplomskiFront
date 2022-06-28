import { Component, OnInit } from '@angular/core';
import { CommonComponent } from './models/base/common.component';
import { AuthService } from './services/auth.service';
import { CurrentRouteService } from './services/current-route.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'DiplomskiFront';

  firstRouteLoaded: boolean = false;
  constructor(
    private currentRouteService: CurrentRouteService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.initService();
  }

  childActivated(activatedComponent: CommonComponent) {
    this.firstRouteLoaded = true;
    this.currentRouteService.setCurrentActiveRoute(activatedComponent);
  }
}
