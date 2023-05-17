import styled from "styled-components";

const S = {
    container: styled.div`
        padding: 10px;
        height: auto;
        flex: 0 0 calc(33.33% - 20px);
        margin: 10px;
        &:hover {
            border: 1px solid ${({ theme }) => theme.text};
        }
    `,
    img: styled.img`
        width: 100%;
        height: 100%;
        object-fit: cover;
    `,
    containerContent: styled.div`
        width: 100%;
        height: 50%;
    `,
};

export default S;
