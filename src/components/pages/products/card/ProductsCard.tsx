import React from 'react';
import { ProductType } from '../../../../types/productType';
import S from './ProductsCard.styled';
import { useNavigate } from 'react-router-dom';
import { Rating } from '@mui/material';
import { t } from 'i18next'

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
                    <h3>{item.title}</h3>
                    <h4>{item.price}{t('currency')}</h4>
                    <Rating name="read-only" value={item.rating ?? 1} readOnly />

                </S.containerContent>

            </S.container >
        </>
    );
};

export default ProductsCard;