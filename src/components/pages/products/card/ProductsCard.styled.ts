import styled from "styled-components";

interface IProps {
    img: string;
}

const S = {
    container: styled.div`
        padding: 10px;
        height: 500px;
        flex: 0 0 calc(33.33% - 20px);
        margin: 10px;
        &:hover {
            border: 1px solid black;
        }
    `,
    wrapper: styled.div`
        width: 100%;
        height: 100%;
    `,
    containerContent: styled.div`
        width: 100%;
        height: 50%;
    `,
    img: styled.div<IProps>`
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-image: ${({ img }) => `url(${img})`};
    `,
};

export default S;
