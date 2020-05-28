import { Routes, RouterModule } from '@angular/router';


export const ApplicationRoutes: Routes = [
    
    
    {
        path: '', loadChildren: () => import('../app/home-directory/home.module').then(m => m.HomePageModule)
    }
    
];

// export const routing = RouterModule.forRoot(appRoutes);


