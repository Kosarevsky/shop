import styled from "styled-components";
import { device } from "../../constant/device";

interface IProps {
    left: number;
}

const S = {
    container: styled.div<IProps>`
        position: absolute;
        top: 50%;
        left: ${({ left }) => `${left}%`};
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        background-color: ${({ theme }) => `${theme.backgroundColor}80`};
        height: 80%;
        width: 40%;
        @media ${device.tablet} {
            font-size: 10px;
        }
        @media ${device.mobileL} {
            font-size: 7px;
        }
    `,
};

export default S;
