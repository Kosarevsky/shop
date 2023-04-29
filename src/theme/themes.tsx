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
    background: string;
}

export const lightTheme: ThemeType = {
    body: "#FFF",
    text: "#363537",
    toggleBorder: "#FFF",
    background: "#276E9A",
};

export const darkTheme: ThemeType = {
    body: "#363537",
    text: "#FAFAFA",
    toggleBorder: "#6B8096",
    background: "#276E9A",
};
