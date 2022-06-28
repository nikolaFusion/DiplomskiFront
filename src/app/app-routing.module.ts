import { AnonymousHeaderComponent } from './layouts/pages/anonymous/anonymous-header/anonymous-header.component';
import { AuthorizedPerentComponent } from './layouts/pages/authorized/authorized-perent/authorized-perent.component';
import { HomeComponent } from './layouts/pages/authorized/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsRoutes } from './services/routes-resolver/routes-const.service';
import { LoginComponent } from './layouts/pages/anonymous/login/login.component';

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
    component: AnonymousHeaderComponent,
    children: [
      {
        path: `${ApplicationsRoutes.Login}`,
        component: LoginComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
