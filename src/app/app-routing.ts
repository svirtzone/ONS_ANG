import { Routes, RouterModule } from '@angular/router';


export const ApplicationRoutes: Routes = [
    
    
    {
        path: 'home', loadChildren: () => import('../app/home-directory/home.module').then(m => m.HomePageModule)
    },
    {
        path: '', loadChildren: () => import('../app/Countries/country.module').then(m => m.CountryPageModule)
    }
    
];

// export const routing = RouterModule.forRoot(appRoutes);


