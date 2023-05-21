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

    content: styled.div`
        display: flex;
    `,
    containerIcon: styled.div`
        max-width: 200px;
        padding: 20px;
    `,
    description: styled.div``,
    img: styled.img`
        max-width: 100%;
    `,
};

export default S;
