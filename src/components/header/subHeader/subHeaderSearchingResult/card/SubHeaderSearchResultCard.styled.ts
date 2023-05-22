import styled from "styled-components";

interface ISubHeaderSearchResultCardPropsType {
    img: string;
}

const S = {
    container: styled.div`
        display: flex;
        height: 60px;
        width: 100%;
        padding: 2px 0px;
    `,
    containerIcon: styled.div<ISubHeaderSearchResultCardPropsType>`
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        background-image: ${({ img }) => `url(${img})`};
        width: 80px;
    `,
    content: styled.div`
        display: flex;
        overflow: hidden;
        align-items: center;
    `,
};

export default S;
