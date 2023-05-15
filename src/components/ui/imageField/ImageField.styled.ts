import styled from "styled-components";
import { styles } from "../../GlobalStyles";

const S = {
    container: styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    `,
    label: styled.label`
        ${styles.button};
    `,
    img: styled.img`
        height: 48px;
    `,
};

export const C = {
    button: styled.button`
        ${styles.button};
    `,
};

export default S;
