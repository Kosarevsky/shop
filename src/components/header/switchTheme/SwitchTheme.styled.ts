import { MdDarkMode, MdWbSunny } from "react-icons/md";
import styled from "styled-components";

const S = {
    container: styled.div`
        display: flex;
        align-items: center;
        padding-right: 2rem;
    `,
    MdWbSunny: styled(MdWbSunny)`
        width: 18px;
        height: 18px;
        color: ${({ theme }) => theme.header.color};
    `,
    MdDarkMode: styled(MdDarkMode)`
        width: 18px;
        height: 18px;
        color: ${({ theme }) => theme.header.color};
    `,
};

export default S;
