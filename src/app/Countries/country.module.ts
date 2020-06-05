import { HttpClientModule,HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CountryPageRoutingModule } from './country-page-routing';
import { CountryComponent } from './country/country.component';
import { Routes, RouterModule } from '@angular/router';



@NgModule({
  declarations: [ CountryComponent],
  // declarations: [AppComponent, HomeComponent,LayoutComponent],
  imports: [
   
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    CountryPageRoutingModule,
   
  ],
  providers: [],
  bootstrap: []
})
export class CountryPageModule {}
