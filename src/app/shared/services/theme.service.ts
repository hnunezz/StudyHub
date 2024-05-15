import { Injectable, signal } from '@angular/core';
import { StorageKeys } from '../enums/storage-keys';
import { Theme } from '../enums/theme';


@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    toggleModeSignal = signal<Theme>(Theme.LIGHT);

    setTheme(themeValue: Theme) {
        this.toggleModeSignal.update((t) => (t = themeValue));
        localStorage.setItem(StorageKeys.THEME_KEY, themeValue);

        const actualTheme = document.body.classList.item(0);
        if (actualTheme) {
            document.body.classList.remove(actualTheme);
        }

        document.body.classList.toggle(`theme-${themeValue.toLowerCase()}`);
    }
}
