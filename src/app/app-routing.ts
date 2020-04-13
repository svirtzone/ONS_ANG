import { Routes, RouterModule } from '@angular/router';



import { LayoutComponent } from './ToDo/Components/_layout/layout/layout.component';
import { HeaderComponent } from './ToDo/Components/_layout/header/header.component';
import { SidebarComponent } from './ToDo/Components/_layout/sidebar/sidebar.component';
import { FooterComponent } from './ToDo/Components/_layout/footer/footer.component';
import { ToDoComponent } from './ToDo/Components/to-do.component';


const appRoutes: Routes = [
    
    //Site routes goes here 
    { 
        path: '', 
        component: LayoutComponent,
        children: [
          { path: '', component: ToDoComponent, pathMatch: 'full'},
          // { path: 'about', component: AboutComponent },
          // { path: 'test/:id', component: AboutComponent }
        ]
    },
    
    // App routes goes here here
    // { 
    //     path: '',
    //     component: AppLayoutComponent, 
    //     children: [
    //       { path: 'dashboard', component: DashboardComponent },
    //       { path: 'profile', component: ProfileComponent }
    //     ]
    // },

    // //no layout routes
    // { path: 'login', component: LoginComponent},
    // { path: 'register', component: RegisterComponent },
    // // otherwise redirect to home
    // { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);


