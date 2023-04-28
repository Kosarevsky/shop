import styled from "styled-components";

const S = {
    container: styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 40px;
        /* background-color: ${({ theme }) => theme.background}; */
        /* color: ${({ theme }) => theme.color}; */
    `,
    logo: styled.div``,
    logoImg: styled.img`
        width: 40%;
        max-width: 40%;
    `,
    center: styled.div`
        align-items: center;
    `,
    right: styled.div`
        align-items: center;
    `,
};

export default S;
