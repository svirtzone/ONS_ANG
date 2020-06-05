import { Routes, RouterModule } from '@angular/router';


export const ApplicationRoutes: Routes = [
    
    
    {
        path: 'home', loadChildren: () => import('../app/home-directory/home.module').then(m => m.HomePageModule)
    },
    {
        path: '', loadChildren: () => import('../app/Countries/country.module').then(m => m.CountryPageModule)
    },
    {
        path: 'login', loadChildren: () => import('../app/Auth/register_login.module').then(m => m.RegisterLoginModule)
    },
    {
        path: 'company-profile', loadChildren: () => import('../app/Company-Profile/company-profile.module').then(m => m.CompanyProfilePageModule)
    }
    
];

// export const routing = RouterModule.forRoot(appRoutes);


