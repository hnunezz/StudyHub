import { Injectable } from '@angular/core';
import { BooleanToTheme, Theme, getThemesList } from '../enums/theme';
import { StorageKeys } from '../enums/storage-keys';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {

    private currentTheme: Theme = Theme.LIGHT;


    get getTheme(): Theme {
        return this.currentTheme;
    }

    setTheme(themeValue: boolean) {
        const theme = BooleanToTheme.get(themeValue) as Theme;
        this.currentTheme = theme;

        localStorage.setItem(StorageKeys.THEME_KEY, theme);

        const actualTheme = document.body.classList.item(0)
        if (actualTheme) {
            document.body.classList.remove(actualTheme)
        }

        document.body.classList.toggle(`theme-${theme.toLowerCase()}`)
    }
}
