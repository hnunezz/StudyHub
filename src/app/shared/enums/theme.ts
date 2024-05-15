export enum Theme {
    DARK = 'Dark',
    LIGHT = 'Light',
}

export const LabelToTheme = new Map<string, Theme>([
    ['Dark', Theme.DARK,],
    ['Light', Theme.LIGHT],
]);

export const ThemeToBoolean = new Map<Theme, boolean>([
    [Theme.DARK, true],
    [Theme.LIGHT, false],
]);

export const BooleanToTheme = new Map<boolean, Theme>([
    [true, Theme.DARK],
    [false, Theme.LIGHT],
]);

export function getThemesList(): Array<string> {
    const typeLayoutEnum: typeof Theme = Theme;
    const result: Array<string> = [];

    Object.values(typeLayoutEnum)
        .filter(enumListKeyAndValue => typeof enumListKeyAndValue === 'string')
        .map(enumKey => {
            result.push(enumKey);
        });

    return result;
}
