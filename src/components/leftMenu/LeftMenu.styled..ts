import { i18n } from "i18next";
import styled from "styled-components";

const S = {
    container: styled.div`
        display: flex;
        flex-direction: column;
        width: 300px;
    `,
    title: styled.h4`
        margin-bottom: 10px;
        margin-left: 10px;
        text-transform: uppercase;
    `,
    content: styled.div`
        display: flex;
        border: none;
        width: 100%;
    `,
    a: styled.a`
        padding: 0.8rem 1.5rem;
        display: block;
        border-bottom: 1px solid ${({ theme }) => theme.toggleBorder};
        color: ${({ theme }) => theme.text};
    `,
};

export default S;
