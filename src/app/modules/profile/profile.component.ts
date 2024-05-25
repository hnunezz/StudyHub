import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BooleanToTheme, ThemeToBoolean } from '../../shared/enums/theme';
import { ComponentsModule } from '../../shared/modules/components/components.module';
import { SwitchComponent } from '../../shared/components/switch/switch.component';
import { ThemeService } from '../../shared/services/theme.service';
import { InputTextComponent } from '../../shared/components/input-text/input-text.component';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [
        ComponentsModule,
        SwitchComponent,
        InputTextComponent,
        ButtonComponent
    ],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss'
})
export class ProfileComponent {
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
