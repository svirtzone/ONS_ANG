import { HttpClientModule,HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
// import { AppRoutingModule } from './app-routing';
import { routing } from './app-routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/frontend/home/home.component';
import { HomeEffects } from './effects/home.effects';
import { HomeReducer } from './reducer/home.reducer';
import { LayoutComponent } from './Components/frontend/_layout/layout/layout.component';
import { HeaderComponent } from './Components/frontend/_layout/header/header.component';
import { SidebarComponent } from './Components/frontend/_layout/sidebar/sidebar.component';
import { FooterComponent } from './Components/frontend/_layout/footer/footer.component';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export const createTransalateLoader=(http: HttpClient) =>{
  return new TranslateHttpLoader(http,'./assets/i18n/' , '.json');
}

@NgModule({
  declarations: [AppComponent, HomeComponent,LayoutComponent,HeaderComponent,SidebarComponent,FooterComponent],
  // declarations: [AppComponent, HomeComponent,LayoutComponent],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    routing,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTransalateLoader,
                deps: [HttpClient]
            }
        }),
    StoreModule.forRoot({ Homes: HomeReducer }),
    EffectsModule.forRoot([HomeEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
