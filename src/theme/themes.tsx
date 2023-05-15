import { ThemeType } from "../types/themeType";

declare module "styled-components" {
    export interface DefaultTheme extends ThemeType { }
}

export const lightTheme: ThemeType = {
    body: "#FFF",
    text: "#363537",
    toggleBorder: "#FFF",
    backgroundColor: "#276E9A",
    header: {
        color: "#FFF",
        backgroundColor: "#1f2937",
    },
    colors: {
        grey: {
            0: "#ECEFF1",
            1: "#CFD8DC",
            2: "#B0BEC5",
            3: "#90A4AE",
            4: "#78909C",
            5: "#607D8B",
            6: "#546E7A",
            7: "#455A64",
            8: "#37474F",
            9: "#263238",
        },
        error: "#F44336",
    },

};

export const darkTheme: ThemeType = {
    body: "#363537",
    text: "#FAFAFA",
    toggleBorder: "#6B8096",
    backgroundColor: "#276E9A",
    header: {
        color: "#FFF",
        backgroundColor: "#1f2937",
    },
    colors: {
        grey: {
            0: "#263238",
            1: "#37474F",
            2: "#455A64",
            3: "#546E7A",
            4: "#607D8B",
            5: "#78909C",
            6: "#90A4AE",
            7: "#B0BEC5",
            8: "#CFD8DC",
            9: "#ECEFF1",
        },
        error: "#F44336",
    },
};
