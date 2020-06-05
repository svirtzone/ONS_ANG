import { HttpClientModule,HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CompanyProfilePageRoutingModule } from './company-profile-page-routing';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { Routes, RouterModule } from '@angular/router';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


export const createTransalateLoader=(http: HttpClient) =>{
  return new TranslateHttpLoader(http,'./assets/i18n/' , '.json');
}

@NgModule({
  declarations: [ CompanyProfileComponent],
  // declarations: [AppComponent, HomeComponent,LayoutComponent],
  imports: [
   
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    CompanyProfilePageRoutingModule,
    TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTransalateLoader,
                deps: [HttpClient]
            }
        }),
   
  ],
  providers: [],
  bootstrap: []
})
export class CompanyProfilePageModule {}
