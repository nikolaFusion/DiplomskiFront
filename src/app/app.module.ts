import { LoginComponent } from './layouts/pages/anonymous/login/login.component';
import { AuthorizedPerentComponent } from './layouts/pages/authorized/authorized-perent/authorized-perent.component';
import { AuthorizedHeaderComponent } from './layouts/pages/authorized/authorized-header/authorized-header.component';
import { HomeComponent } from './layouts/pages/authorized/home/home.component';
import { AnonymousHeaderComponent } from './layouts/pages/anonymous/anonymous-header/anonymous-header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    AnonymousHeaderComponent,
    HomeComponent,
    AuthorizedHeaderComponent,
    AuthorizedPerentComponent,
    AnonymousHeaderComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
