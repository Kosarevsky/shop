import styled from "styled-components";

const S = {
    container: styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 30px;
        background-color: "aqua";
        color: ${({ theme }) => theme.background};
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
