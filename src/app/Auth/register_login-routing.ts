import { RegisterLoginComponent } from './register_login/register_login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const RegisterLoginPageModule: Routes = [
    { 
        path: '', 
        component: RegisterLoginComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(RegisterLoginPageModule)
    ],
    exports: [RouterModule]
})
export class RegisterLoginRoutingModule { }
