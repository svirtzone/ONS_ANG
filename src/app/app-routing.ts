import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './Components/_layout/layout/layout.component';
import { HeaderComponent } from './Components/_layout/header/header.component';
import { SidebarComponent } from './Components/_layout/sidebar/sidebar.component';
import { FooterComponent } from './Components/_layout/footer/footer.component';
import { HomeComponent } from './Components/home.component';


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


