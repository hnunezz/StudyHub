import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavigationComponent } from './core/components/navigation/navigation.component';
import { StorageKeys } from './shared/enums/storage-keys';
import { LabelToTheme, Theme } from './shared/enums/theme';
import { ThemeService } from './shared/services/theme.service';
import { MessageService } from './shared/services/message.service';
import { MessageComponent } from './core/components/message/message.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        NavigationComponent,
        MessageComponent
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
