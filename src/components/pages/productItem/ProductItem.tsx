import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { productActions } from '../../../store/product/productSlice';
import IsLoading from '../../ui/isLoading/IsLoading';
import S from './ProductItem.styled';
import { t } from "i18next"
import ShopWrapper from '../../shopWrapper/ShopWrapper.styled';
import MenuLeft from '../../menu/menuLeft/MenuLeft';
import SubHeader from '../../subHeader/SubHeader';

const ProductItem: React.FC = () => {
    const { id } = useParams();
    const isLoading = useAppSelector((state) => state.product.isLoading);
    const product = useAppSelector((state) => state.product.product);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id) {
            dispatch(productActions.getProduct(+id))
        }
    }, [id]);

    return (
        <>
            <SubHeader showOnlySearchString={true} />
            <ShopWrapper>
                {isLoading && <IsLoading />}

                {product && (
                    <>
                        <S.container>
                            <S.menu>
                                <MenuLeft />
                            </S.menu>
                            <S.contentWrapper>
                                <h1>{product.title}</h1>
                                <S.container>
                                    <S.containerIcon>
                                        <S.img src={product.images[0].toString()} alt={product.title} />
                                    </S.containerIcon>
                                    <S.description>
                                        <h2>{product.description}</h2>
                                        <h3>{t('price')}: {product.price}</h3>
                                    </S.description>
                                </S.container>
                            </S.contentWrapper>
                        </S.container>
                    </>
                )}
            </ShopWrapper>
        </>
    );
};

export default ProductItem;