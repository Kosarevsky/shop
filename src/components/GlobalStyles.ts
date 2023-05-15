import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
}`;

export const styles = {
    button: css`
        cursor: pointer;
        outline: none;
        border: none;
        padding: 0 24px;
        height: 50px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${({ theme }) => theme.colors.grey[0]};
        color: ${({ theme }) => theme.colors.grey[9]};

        &:hover {
            background-color: ${({ theme }) => theme.colors.grey[1]};
        }
        &:active,
        &:focus {
            background-color: ${({ theme }) => theme.colors.grey[2]};
        }
    `,
};
