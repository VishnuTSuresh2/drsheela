import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule  } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TreatmentsPageComponent } from './treatments-page/treatments-page.component';

import { TreatmentsDataResolverService } from './treatments-data-resolver.service';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'treatments', component: TreatmentsPageComponent ,resolve:{
    treatments:TreatmentsDataResolverService
  }},
];


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TreatmentsPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    JsonpModule
  ],
  providers: [TreatmentsDataResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
