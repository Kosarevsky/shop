import styled, { css } from "styled-components";

interface IMenuLeftPropsType {
    zIndex?: number;
    position?: string;
    categoryId?: number;
}

interface IStyledAProps {
    isActive?: boolean;
}
const S = {
    container: styled.div<IMenuLeftPropsType>`
        position: ${({ position }) => position ?? "static"};
        z-index: ${({ zIndex }) => zIndex ?? 0};
        width: 300px;
        background-color: ${({ theme }) => theme.body};
        transition: all 0.5s linear;
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
    a: styled.a<IStyledAProps>`
        padding: 0.8rem 1.5rem;
        display: block;
        border-bottom: 1px solid ${({ theme }) => theme.toggleBorder};
        color: ${({ theme }) => theme.text};
        transition: all 0.5s linear;
        ${(props) =>
            props.isActive &&
            css`
                background-color: ${({ theme }) =>
                    `${theme.backgroundColor}80`};
            `}
        &:hover {
            background-color: ${({ theme }) => `${theme.backgroundColor}30`};
        }
    `,
};

export default S;
