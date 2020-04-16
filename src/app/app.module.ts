import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
// import { AppRoutingModule } from './app-routing';
import { routing } from './app-routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home.component';
import { HomeEffects } from './effects/home.effects';
import { HomeReducer } from './reducer/home.reducer';
import { LayoutComponent } from './Components/_layout/layout/layout.component';
import { HeaderComponent } from './Components/_layout/header/header.component';
import { SidebarComponent } from './Components/_layout/sidebar/sidebar.component';
import { FooterComponent } from './Components/_layout/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HomeComponent,LayoutComponent,HeaderComponent,SidebarComponent,FooterComponent],
  // declarations: [AppComponent, HomeComponent,LayoutComponent],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    routing,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ Homes: HomeReducer }),
    EffectsModule.forRoot([HomeEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
