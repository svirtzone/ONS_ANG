import { HttpClientModule,HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomePageRoutingModule } from './home-page-routing';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from '../_layout/layout/layout.component';
import { HeaderComponent } from '../_layout/header/header.component';
import { SidebarComponent } from '../_layout/sidebar/sidebar.component';
import { FooterComponent } from '../_layout/footer/footer.component';
import { Routes, RouterModule } from '@angular/router';


import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


export const createTransalateLoader=(http: HttpClient) =>{
  return new TranslateHttpLoader(http,'./assets/i18n/' , '.json');
}

@NgModule({
  declarations: [ HomeComponent,LayoutComponent,HeaderComponent,SidebarComponent,FooterComponent],
  // declarations: [AppComponent, HomeComponent,LayoutComponent],
  imports: [
   
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HomePageRoutingModule,
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
export class HomePageModule {}
