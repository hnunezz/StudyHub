import { Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { ErrorComponent } from './core/components/error/error.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: "home",
        component: HomeComponent,
    },
    {
        path: "profile",
        component: ProfileComponent,
    },
    { path: '**', component: ErrorComponent },
];
