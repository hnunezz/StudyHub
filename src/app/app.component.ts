import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavigationComponent } from './core/components/navigation/navigation.component';
import { StorageKeys } from './core/enums/storage-keys';
import { LabelToTheme, Theme } from './core/enums/theme';
import { ThemeService } from './core/services/theme.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        NavigationComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    private router = inject(Router);
    private themeService = inject(ThemeService);

    title = 'StudyHub';

    ngOnInit(): void {
        const theme = LabelToTheme
            .get((localStorage
                .getItem(StorageKeys.THEME_KEY) as Theme));

        this.themeService.setTheme(theme);
    }

    navigateTo(path: string) {
        this.router.navigate([path]);
    }

}
