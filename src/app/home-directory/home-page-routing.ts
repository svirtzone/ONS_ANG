import { LayoutComponent } from '../_layout/layout/layout.component';
import { HeaderComponent } from '../_layout/header/header.component';
import { SidebarComponent } from '../_layout/sidebar/sidebar.component';
import { FooterComponent } from '../_layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const HomePageModule: Routes = [
    { 
        path: '', 
        component: LayoutComponent,
        children: [
          { path: '', component: HomeComponent, pathMatch: 'full'},
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(HomePageModule)
    ],
    exports: [RouterModule]
})
export class HomePageRoutingModule { }
