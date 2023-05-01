import { createSlice } from "@reduxjs/toolkit";
import { darkTheme, lightTheme } from "../../theme/themes";
import { LanguageType } from "../../types/languageType";
import i18n from "../../utils/i18nConfig";
import { ThemeNameType } from "../../types/themeNameType";
import { ThemeType } from "../../types/themeType";

interface SettingsStateType {
    language: LanguageType;
    theme: ThemeType;
    themeName: ThemeNameType;
}

const getInitialState = (): SettingsStateType => {
    let language = localStorage.getItem("i18nextLng") as LanguageType;
    if (!Object.values(LanguageType).includes(language)) {
        language = LanguageType.EN;
    }

    let themeName = localStorage.getItem("themeName") as ThemeNameType;
    if (!Object.values(ThemeNameType).includes(themeName)) {
        themeName = ThemeNameType.dark;
    }

    const theme = themeName === ThemeNameType.dark ? darkTheme : lightTheme;

    return { language, theme, themeName };
};

const settingsSlice = createSlice({
    name: "settings",
    initialState: getInitialState(),
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload;
            localStorage.setItem("i18nextLng", action.payload);
            i18n.changeLanguage(action.payload);
        },
        toggleTheme: (state) => {
            if (state.themeName === ThemeNameType.light) {
                state.themeName = ThemeNameType.dark;
                state.theme = darkTheme;
            } else {
                state.themeName = ThemeNameType.light;
                state.theme = lightTheme;
            }
            localStorage.setItem("themeName", state.themeName);
        },
    },
});

export const settingsAction = {
    ...settingsSlice.actions,
};

const settingsReducer = settingsSlice.reducer;
export default settingsReducer;
