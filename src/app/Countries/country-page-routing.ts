
import { CountryComponent } from './country/country.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const CountryPageModule: Routes = [
    { 
        path: '', 
        component: CountryComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(CountryPageModule)
    ],
    exports: [RouterModule]
})
export class CountryPageRoutingModule { }
