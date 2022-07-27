import { MyArrangementsGroupComponent } from './layouts/pages/my-arrangements-group/my-arrangements-group.component';
import { ArrangementPopUpComponent } from './layouts/widgets/arrangement-pop-up/arrangement-pop-up.component';
import { LoaderComponent } from './layouts/widgets/loader/loader.component';
import { TravelPlaceInfoComponent } from './layouts/pages/common/travel-place-info/travel-place-info.component';
import { TravelFinderComponent } from './layouts/widgets/travel-finder/travel-finder.component';
import { TravelPlacesComponent } from './layouts/pages/common/travel-places/travel-places.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegistrationPopUpComponent } from './layouts/widgets/registration-pop-up/registration-pop-up.component';
import { LoginPopUpComponent } from './layouts/widgets/login-pop-up/login-pop-up.component';
import { HomeFindingComponent } from './layouts/pages/common/home-finding/home-finding.component';
import { AnonymousParentComponent } from './layouts/pages/anonymous/anonymous-parent/anonymous-parent.component';
import { AnonymousHeaderComponent } from './layouts/widgets/anonymous-header/anonymous-header.component';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { HttpInterceptorService } from './services/api-services/http-interceptor.service';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InfoPopUpComponent } from './layouts/widgets/info-pop-up/info-pop-up.component';
@NgModule({
  declarations: [
    AppComponent,
    AnonymousHeaderComponent,
    AnonymousHeaderComponent,
    HomeFindingComponent,
    AnonymousParentComponent,
    LoginPopUpComponent,
    RegistrationPopUpComponent,
    TravelPlacesComponent,
    TravelFinderComponent,
    TravelPlaceInfoComponent,
    LoaderComponent,
    ArrangementPopUpComponent,
    InfoPopUpComponent,
    MyArrangementsGroupComponent,
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
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    CommonModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
