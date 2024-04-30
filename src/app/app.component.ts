import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit, Signal, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavigationComponent } from './core/components/navigation/navigation.component';
import { ThemeService } from './core/services/theme.service';
import { StorageKeys } from './core/enums/storage-keys';
import { LabelToTheme, Theme, ThemeToBoolean } from './core/enums/theme';

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
export class AppComponent implements OnInit{
    private router = inject(Router);
    private themeService = inject(ThemeService);

    title = 'StudyHub';

    ngOnInit(): void {
        const theme = ThemeToBoolean.get(LabelToTheme.get((localStorage.getItem(StorageKeys.THEME_KEY) as Theme)) as Theme);
        this.themeService.setTheme(theme);
    }

    navigateTo(path: string) {
        this.router.navigate([path]);
    }

}
