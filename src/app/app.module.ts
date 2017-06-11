import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule  } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TreatmentsPageComponent } from './treatments-page/treatments-page.component';
import { AppointmentPageComponent } from './appointment-page/appointment-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';

import { ClinicInformationService } from './clinic-information.service';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'treatments', component: TreatmentsPageComponent},
  { path: 'book', component: AppointmentPageComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TreatmentsPageComponent,
    AppointmentPageComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    JsonpModule
  ],
  providers: [ClinicInformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
