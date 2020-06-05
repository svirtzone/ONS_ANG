import { HttpClientModule,HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationRoutes } from './app-routing';
import { AppComponent } from './app.component';





@NgModule({
  declarations: [AppComponent],
  // declarations: [AppComponent, HomeComponent,LayoutComponent],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    // routing,
    RouterModule.forRoot(ApplicationRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  exports: [RouterModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
