import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, Signal, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavigationComponent } from './core/components/navigation/navigation.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        NavigationComponent
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    private router = inject(Router);

    title = 'StudyHub';

    navigateTo(path: string) {
        this.router.navigate([path]);
    }

}
