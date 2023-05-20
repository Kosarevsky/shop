import React from 'react';
import S from './IsLoading.styled';

const LoadingSpinner = () => {
    return (
        <>
            <S.backdrop />
            <S.container>
                <S.spinner>
                </S.spinner>
            </S.container>
        </>
    );
};

export default LoadingSpinner;