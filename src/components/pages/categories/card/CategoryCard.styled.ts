import styled from "styled-components";

interface IProps {
    img: string;
}

const S = {
    container: styled.div<IProps>`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30%;
        height: 200px;
        cursor: pointer;
        border: 1px solid;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-image: ${({ img }) => `url(${img})`};
    `,
    content: styled.div`
        background-color: ${({ theme }) => `${theme.backgroundColor}80`};
        color: white;
        padding: 20px 40px;
    `,
};

export default S;
