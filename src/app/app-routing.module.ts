import { ArrangementComponent } from './layouts/pages/arrangement/arrangement.component';
import { AuthGuard } from './guards/auth.guard';
import { TravelPlacesComponent } from './layouts/pages/common/travel-places/travel-places.component';
import { HomeFindingComponent } from './layouts/pages/common/home-finding/home-finding.component';
import { HomeComponent } from './layouts/pages/common/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsRoutes } from './services/routes-resolver/routes-const.service';
import { AnonymousParentComponent } from './layouts/pages/anonymous/anonymous-parent/anonymous-parent.component';

const routes: Routes = [
  {
    path: '',
    component: AnonymousParentComponent,

    children: [
      {
        path: `${ApplicationsRoutes.HomeFinding}`,
        component: HomeFindingComponent,
      },
      {
        path: `${ApplicationsRoutes.TravelPlaces}`,
        component: TravelPlacesComponent,
      },
      {
        path: `${ApplicationsRoutes.Arrangement}/:travelPlaceId`,
        component: ArrangementComponent,
      },
      {
        path: '**',
        redirectTo: ApplicationsRoutes.HomeFinding,
        pathMatch: 'full',
      },
    ],
  },

  {
    path: '**',
    redirectTo: ApplicationsRoutes.HomeFinding,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
