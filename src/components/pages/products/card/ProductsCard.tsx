import React from 'react';
import { ProductType } from '../../../../types/productType';
import S from './ProductsCard.styled';

interface IProductsPropsType {
    item: ProductType
}

const ProductsCard: React.FC<IProductsPropsType> = ({ item }) => {
    return (
        <S.container>
            <S.wrapper>
                <S.containerContent>
                    <S.img
                        img={item.images[0].toString()}>
                    </S.img>
                </S.containerContent>
                <S.containerContent>
                    тут текст
                </S.containerContent>

            </S.wrapper>
        </S.container >
    );
};

export default ProductsCard;