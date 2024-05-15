import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BooleanToTheme, ThemeToBoolean } from '../../shared/enums/theme';
import { SwitchComponent } from '../../switch/switch.component';
import { ThemeService } from '../../shared/services/theme.service';

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        SwitchComponent
    ],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss'
})
export class ProfileComponent{
    private themeService = inject(ThemeService);
    themeValue: boolean;

    constructor() {
        this.themeValue = ThemeToBoolean
            .get(this.themeService
                .toggleModeSignal()) as boolean;
    }

    toggleTheme(event: boolean) {
        this.themeValue = event
        this.themeService
            .setTheme(BooleanToTheme
                .get(this.themeValue));
    }
}
