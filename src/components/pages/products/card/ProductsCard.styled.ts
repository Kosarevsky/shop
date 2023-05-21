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

        cursor: pointer;
        border: 1px solid;

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
        align-items: center;
        justify-content: center;
        text-align: center;
    `,
};

export default S;
