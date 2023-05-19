import styled from "styled-components";
import { device } from "../../../constant/device";

const S = {
    container: styled.div``,
    list: styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
        gap: 10px;
        justify-items: center;
        position: relative;
        @media ${device.mobileL} {
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        }
    `,
};

export default S;
