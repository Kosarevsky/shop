import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../constant/device";

const S = {
    header: styled.header`
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${({ theme }) => theme.header.backgroundColor};
    `,
    container: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        //padding-right: 30px;
        color: ${({ theme }) => theme.body};
        @media ${device.desktop} {
            width: 1400px;
        }
        @media ${device.laptop} {
            width: 800px;
        }
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
    link: styled(NavLink)`
        cursor: pointer;
        color: #fff;
    `,
};

export default S;
