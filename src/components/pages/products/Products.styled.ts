import styled from "styled-components";
import { device } from "../../../constant/device";

const S = {
    container: styled.div`
        display: flex;
        padding-top: 10px;
    `,

    menu: styled.div`
        width: 300px;
        /* @media ${device.tablet} {
            display: none;
        } */
    `,
    items: styled.div`
        display: grid;
        width: 100%;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: 5px;
        justify-items: center;
        @media ${device.mobileM} {
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        }
    `,
};

export default S;
