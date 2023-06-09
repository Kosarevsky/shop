import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../constant/device";
import { Login } from "@mui/icons-material";

const S = {
    header: styled.header`
        background-color: ${({ theme }) => theme.header.backgroundColor};
    `,
    container: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${({ theme }) => theme.body};
        width: 100%;
        max-width: 100%;
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

export const StyledLogin = styled(Login)(({ theme }) => ({
    color: theme.header.color,
    height: "35px !important",
    width: "35px !important",
    margin: "0 2rem 0 0",
    "&:hover": {
        color: theme.header.color,
    },
}));

export default S;
