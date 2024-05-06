import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BooleanToTheme, ThemeToBoolean } from '../../core/enums/theme';
import { ThemeService } from '../../core/services/theme.service';

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule
    ],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss'
})
export class ProfileComponent {
    private themeService = inject(ThemeService);
    themeToggle: boolean = false;

    constructor() {
        this.themeToggle = ThemeToBoolean
            .get(this.themeService
                .toggleModeSignal()) as boolean;
    }

    toggleTheme() {
        this.themeToggle = !this.themeToggle
        this.themeService
            .setTheme(BooleanToTheme
                .get(this.themeToggle));
    }
}
