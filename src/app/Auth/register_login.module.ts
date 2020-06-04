import { HttpClientModule,HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RegisterLoginRoutingModule } from './register_login-routing';
import { RegisterLoginComponent } from './register_login.component';
import { Routes, RouterModule } from '@angular/router';



@NgModule({
  declarations: [ RegisterLoginComponent],
  // declarations: [AppComponent, HomeComponent,LayoutComponent],
  imports: [
   
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RegisterLoginRoutingModule,
    
   
  ],
  providers: [],
  bootstrap: []
})
export class RegisterLoginModule {}
