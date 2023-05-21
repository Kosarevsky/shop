import React from 'react';
import { ProductType } from '../../../../types/productType';
import S from './ProductsCard.styled';
import { useNavigate } from 'react-router-dom';

interface IProductsPropsType {
    item: ProductType
}

const ProductsCard: React.FC<IProductsPropsType> = ({ item }) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/product/${item.id}`)
    }

    return (
        <>
            <S.container onClick={handleClick} >
                <S.containerContent>
                    <S.img
                        src={item.images[0].toString()}>
                    </S.img>
                </S.containerContent>
                <S.containerContent>
                    тут текст
                </S.containerContent>

            </S.container >
        </>
    );
};

export default ProductsCard;