import { createSlice } from "@reduxjs/toolkit";

interface SettingsStateType {
    language: LanguageType;
    theme: ThemeType;
    themeName: ThemeNameType;
}

enum LanguagesType {
    EN = "en",
    RU = "ru",
    PL = "pl",
}

const getInitialState = () => {
    let language = localStorage.getItem("language") as LanguagesType;

    if (!Object.values(LanguagesType).includes(language)) {
        language = LanguagesType.EN;
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
