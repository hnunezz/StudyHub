import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../core/services/theme.service';
import { ThemeToBoolean } from '../../core/enums/theme';

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
        this.themeToggle = ThemeToBoolean.get(this.themeService.getTheme) as boolean;
    }

    toggleTheme() {
        this.themeToggle = !this.themeToggle
        this.themeService.setTheme(this.themeToggle);
    }
}
