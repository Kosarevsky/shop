export enum ThemeNameType {
    dark,
    light,
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
    background: "#363537",
};

export const darkTheme: ThemeType = {
    body: "#363537",
    text: "#FAFAFA",
    toggleBorder: "#6B8096",
    background: "#999",
};
