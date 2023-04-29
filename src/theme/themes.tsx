export enum ThemeNameType {
    dark = "dark",
    light = "light",
}

declare module "styled-components" {
    export interface DefaultTheme extends ThemeType {}
}

export interface ThemeType {
    body: string;
    text: string;
    toggleBorder: string;
    backgroundColor: string;
    header: {
        color: string;
        backgroundColor: string;
    }
}

export const lightTheme: ThemeType = {
    body: "#FFF",
    text: "#363537",
    toggleBorder: "#FFF",
    backgroundColor: "#276E9A",
    header:{
        color: "#FFF",
        backgroundColor: "#1f2937",
    }
};

export const darkTheme: ThemeType = {
    body: "#363537",
    text: "#FAFAFA",
    toggleBorder: "#6B8096",
    backgroundColor: "#276E9A",
    header:{
        color: "#FFF",
        backgroundColor: "#1f2937",
    }
};
