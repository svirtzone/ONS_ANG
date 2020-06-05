import { LayoutComponent } from '../_layout/layout/layout.component';
import { HeaderComponent } from '../_layout/header/header.component';
import { SidebarComponent } from '../_layout/sidebar/sidebar.component';
import { FooterComponent } from '../_layout/footer/footer.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const CompanyProfilePageModule: Routes = [
	{ 
        path: '', 
        component: LayoutComponent,
        children: [
          { path: '', component: CompanyProfileComponent, pathMatch: 'full'},
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(CompanyProfilePageModule)
    ],
    exports: [RouterModule]
})
export class CompanyProfilePageRoutingModule { }
