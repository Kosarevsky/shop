import styled from "styled-components";

const S = {
    container: styled.div`
        position: absolute;
        width: 200%;
        left: -100%;
        height: 300px;
        z-index: 1;
        box-shadow: 0 0 5px 2px rgba(221, 221, 221, 1);
        overflow: auto;
        background-color: ${({ theme }) => theme.body};
        cursor: pointer;
    `,
    subContainer: styled.div`
        padding: 10px;
        width: 100%;
        height: 100%;
    `,
};

export default S;
