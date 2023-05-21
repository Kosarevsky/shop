import TextField from "@mui/material/TextField";
import { GoSearch } from "react-icons/go";
import { MdClear } from "react-icons/md";
import styled, { css } from "styled-components";
import { device } from "../../constant/device";
import { GiHamburgerMenu } from "react-icons/gi";

const styles = {
    icon: css`
        color: ${({ theme }) => theme.text};
        width: 40px;
        height: 40px;
        padding: 0;
        margin-left: 24px;
        margin-right: 24px;
        @media ${device.mobileL} {
            width: 24px;
            height: 24px;
            margin-left: 12px;
            margin-right: px;
        }
    `,
};

const S = {
    container: styled.nav`
        display: flex;
        padding: 10px 0;
        margin-bottom: 10px;
        justify-content: space-between;
        border-bottom: 1px solid ${({ theme }) => theme.text};
        @media ${device.tablet} {
            margin: 5px 0;
        }
    `,
    ul: styled.ul`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    `,
    logo: styled.div``,
    logoImg: styled.img``,
};

export const StyledGiHamburgerMenu = styled(GiHamburgerMenu)`
    ${styles.icon};
    display: none;
    @media ${device.tablet} {
        display: flex;
    }
`;

export const StyledTextField = styled(TextField)`
    & label.Mui-focused {
        color: ${({ theme }) => theme.body};
    }
    & .MuiOutlinedInput-root {
        fieldset {
            border-color: ${({ theme }) => theme.text};
        }
        &:hover fieldset {
            border-color: ${({ theme }) => theme.text};
        }
        &.Mui-focused fieldset {
            border-color: ${({ theme }) => theme.text};
        }
        & input {
            color: ${({ theme }) => theme.text};
        }
    }
`;

export const StyledGoSearch = styled(GoSearch)`
    color: ${({ theme }) => theme.text};
`;

export const StyledMdClear = styled(MdClear)`
    color: ${({ theme }) => theme.text};
`;

export default S;
