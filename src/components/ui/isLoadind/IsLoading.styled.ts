import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const S = {
    backdrop: styled.div`
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${({ theme }) => theme.colors.grey[1]};
        opacity: 0.5;
    `,
    spinner: styled.div`
        width: 50px;
        height: 50px;
        border: 10px solid #f3f3f3; /* Light grey */
        border-top: 10px solid #383636; /* Black */
        border-radius: 50%;
        animation: ${spin} 1.5s linear infinite;
    `,
    container: styled.div`
        display: grid;
        justify-content: center;
        align-items: center;
        height: 350px;
    `,
};

export default S;
