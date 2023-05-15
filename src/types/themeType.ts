type ColorsIndexesType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type ColorType = { [name in ColorsIndexesType]: string };

export interface ThemeType {
    body: string;
    text: string;
    toggleBorder: string;
    backgroundColor: string;
    header: {
        color: string;
        backgroundColor: string;
    };
    colors: {
        grey: ColorType;
        error: string;
    };
}
