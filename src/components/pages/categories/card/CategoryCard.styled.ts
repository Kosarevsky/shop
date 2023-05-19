import styled from "styled-components";
import { device } from "../../../../constant/device";

interface IProps {
    img: string;
}

const S = {
    container: styled.div<IProps>`
        border-radius: 20px;
        overflow: hidden;
        height: 230px;
        width: 340px;
        background: black;
        position: relative;

        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: 1px solid;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-image: ${({ img }) => `url(${img})`};
        @media ${device.mobileL} {
            width: 240px;
        }
    `,
    content: styled.div`
        background-color: ${({ theme }) => `${theme.backgroundColor}80`};
        color: white;
        padding: 20px 40px;
    `,
};

export default S;
