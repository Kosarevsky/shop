import styled from "styled-components";

const S = {
    container: styled.div`
        /* position: absolute; */
        /* top: 50%; */
        /* transform: translate(-50%, -50%); */
        display: flex;
        /* flex-direction: column; */
        align-items: center;
        justify-content: center;
        /* height: 80%; */
        width: 30%;
        height: 200px;
        cursor: pointer;
        border: 1px solid;
    `,
    content: styled.div`
        background-color: ${({ theme }) => `${theme.backgroundColor}80`};
        color: white;
        padding: 20px 40px;
    `,
};

export default S;
