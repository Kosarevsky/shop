import { MdDarkMode, MdWbSunny } from "react-icons/md";
import styled from "styled-components";

const S = {
    container: styled.div`
        display: flex;
        align-items: center;
    `,
    MdWbSunny: styled(MdWbSunny)`
        width: 18px;
        height: 18px;
        color: ${({ theme }) => theme.header.color};
        background-color: ${({ theme }) => theme.header.backgroundColor};
    `,
    MdDarkMode: styled(MdDarkMode)`
        width: 18px;
        height: 18px;
        color: ${({ theme }) => theme.header.color};
        background-color: ${({ theme }) => theme.header.backgroundColor};
    `,
};

export default S;
