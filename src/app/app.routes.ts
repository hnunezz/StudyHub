import { Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { ErrorComponent } from './core/components/error/error.component';
import { ReleaseNotesComponent } from './modules/release-notes/release-notes.component';
import { StudentsAndTeachersComponent } from './modules/register/users/students-and-teachers/students-and-teachers.component';
import { AdministrativeComponent } from './modules/register/users/administrative/administrative.component';
import { ContentComponent } from './modules/content/content.component';

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
    {
        path: "students-teachers",
        component: StudentsAndTeachersComponent,
    },
    {
        path: "administrative",
        component: AdministrativeComponent,
    },
    {
        path: "content",
        component: ContentComponent,
    },
    { path: '**', component: ErrorComponent },
];
