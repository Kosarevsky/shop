import { NavLink } from "react-router-dom";
import styled from "styled-components";

const S = {
    container: styled.header`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 30px;
        background-color: ${({ theme }) => theme.header.backgroundColor};
        color: ${({ theme }) => theme.body};
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
        display: flex;
        align-items: center;
    `,
    link:styled(NavLink)`
        cursor: pointer;
        color: #fff;
    `
};

export default S;
