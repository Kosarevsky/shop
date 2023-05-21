import styled from "styled-components";
import { device } from "../../../constant/device";

const S = {
    container: styled.div`
        display: flex;
    `,
    menu: styled.div`
        @media ${device.tablet} {
            display: none;
        }
    `,

    contentWrapper: styled.div`
        width: 100%;
    `,

    containerIcon: styled.div`
        max-width: 200px;
        padding: 20px;
    `,
    description: styled.div`
        @media ${device.tablet} {
            font-size: 12px;
        }
        @media ${device.mobileL} {
            font-size: 10px;
        }
    `,
    img: styled.img`
        max-width: 100%;
    `,
};

export default S;
