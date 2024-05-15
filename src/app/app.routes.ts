import { Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { ErrorComponent } from './core/components/error/error.component';
import { ReleaseNotesComponent } from './modules/release-notes/release-notes.component';

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
    {
        path: "release-notes",
        component: ReleaseNotesComponent,
    },
    { path: '**', component: ErrorComponent },
];
