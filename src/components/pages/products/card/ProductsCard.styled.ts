import styled from "styled-components";
import { device } from "../../../../constant/device";

const S = {
    container: styled.div`
        border-radius: 5px;
        overflow: hidden;
        height: 330px;
        width: 240px;
        background: black;
        position: relative;
        flex-direction: column;
        cursor: pointer;
        border: 1px solid;
        background-color: ${({ theme }) => theme.body};

        @media ${device.mobileM} {
            width: 180px;
        }
    `,
    img: styled.img`
        width: 100%;
        height: 100%;
        object-fit: contain;
    `,
    containerContent: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    `,
};

export default S;
