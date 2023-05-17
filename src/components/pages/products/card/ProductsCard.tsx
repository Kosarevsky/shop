import React from 'react';
import { ProductType } from '../../../../types/productType';
import S from './ProductsCard.styled';

interface IProductsPropsType {
    item: ProductType
}

const ProductsCard: React.FC<IProductsPropsType> = ({ item }) => {
    return (
        <S.container>
            <S.img
                src={item.images[0].toString()}>
            </S.img>
            <S.containerContent>
                тут текст
            </S.containerContent>

        </S.container >
    );
};

export default ProductsCard;