import { HomeFindingComponent } from './layouts/pages/common/home-finding/home-finding.component';
import { AnonymousHeaderComponent } from './layouts/widgets/anonymous-header/anonymous-header.component';
import { AuthorizedPerentComponent } from './layouts/pages/authorized/authorized-perent/authorized-perent.component';
import { HomeComponent } from './layouts/pages/authorized/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsRoutes } from './services/routes-resolver/routes-const.service';
import { AnonymousParentComponent } from './layouts/pages/anonymous/anonymous-parent/anonymous-parent.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorizedPerentComponent,
    children: [
      {
        path: `${ApplicationsRoutes.Home}`,
        component: HomeComponent,
      },
    ],
  },

  {
    path: '',
    component: AnonymousParentComponent,
    children: [
      {
        path: `${ApplicationsRoutes.HomeFinding}`,
        component: HomeFindingComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
