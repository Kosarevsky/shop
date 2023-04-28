import { createSlice } from "@reduxjs/toolkit";
import { ThemeNameType, ThemeType } from "../../theme/themes";

interface SettingsStateType {
    language: LanguageType;
    theme: ThemeType;
    themeName: ThemeNameType;
}
enum LanguageType {
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
    if (!themeNames.includes(themeName)) {
    }
    return { language };
};

const settingsSlice = createSlice({
    name: "settings",
    initialState: getInitialState(),
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload;
            localStorage.setItem("language", state.language);
        },
    },
});

export const settingsAction = {
    ...settingsSlice.actions,
};

const settingsReducer = settingsSlice.reducer;
export default settingsReducer;
