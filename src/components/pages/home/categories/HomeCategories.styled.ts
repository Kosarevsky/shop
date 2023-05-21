import styled from "styled-components";
import { device } from "../../../../constant/device";

const S = {
    container: styled.div`
        padding-top: 10px;
    `,
    list: styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
        gap: 10px;
        justify-items: center;
        @media ${device.mobileM} {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        }
    `,
};

export default S;
