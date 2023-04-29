import { createSlice } from "@reduxjs/toolkit";
import {
    ThemeNameType,
    ThemeType,
    darkTheme,
    lightTheme,
} from "../../theme/themes";

interface SettingsStateType {
    language: LanguageType;
    theme: ThemeType;
    themeName: ThemeNameType;
}
export enum LanguageType {
    EN = "en",
    RU = "ru",
    PL = "pl",
}

const getInitialState = () => {
    let language = localStorage.getItem("language") as LanguageType;
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
            localStorage.setItem("language", state.language);
        },
        toggleTheme: (state) => {
            state.themeName =
                state.themeName === ThemeNameType.light
                    ? ThemeNameType.dark
                    : ThemeNameType.light;
            localStorage.setItem("themeName", state.themeName);
        },
    },
});

export const settingsAction = {
    ...settingsSlice.actions,
};

const settingsReducer = settingsSlice.reducer;
export default settingsReducer;
