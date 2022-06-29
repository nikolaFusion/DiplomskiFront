import { TravelPlacesComponent } from './layouts/pages/common/travel-places/travel-places.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationPopUpComponent } from './layouts/widgets/registration-pop-up/registration-pop-up.component';
import { LoginPopUpComponent } from './layouts/widgets/login-pop-up/login-pop-up.component';
import { HomeFindingComponent } from './layouts/pages/common/home-finding/home-finding.component';
import { AnonymousParentComponent } from './layouts/pages/anonymous/anonymous-parent/anonymous-parent.component';
import { AuthorizedPerentComponent } from './layouts/pages/authorized/authorized-perent/authorized-perent.component';
import { AuthorizedHeaderComponent } from './layouts/widgets/authorized-header/authorized-header.component';
import { HomeComponent } from './layouts/pages/authorized/home/home.component';
import { AnonymousHeaderComponent } from './layouts/widgets/anonymous-header/anonymous-header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AnonymousHeaderComponent,
    HomeComponent,
    AuthorizedHeaderComponent,
    AuthorizedPerentComponent,
    AnonymousHeaderComponent,
    HomeFindingComponent,
    AnonymousParentComponent,
    LoginPopUpComponent,
    RegistrationPopUpComponent,
    TravelPlacesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
