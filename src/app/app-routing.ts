import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './Components/frontend/_layout/layout/layout.component';
import { HeaderComponent } from './Components/frontend/_layout/header/header.component';
import { SidebarComponent } from './Components/frontend/_layout/sidebar/sidebar.component';
import { FooterComponent } from './Components/frontend/_layout/footer/footer.component';
import { HomeComponent } from './Components/frontend/home/home.component';


const appRoutes: Routes = [
    
    //Site routes goes here 
    { 
        path: '', 
        component: LayoutComponent,
        children: [
          { path: '', component: HomeComponent, pathMatch: 'full'},
        ]
    },
    
];

export const routing = RouterModule.forRoot(appRoutes);


