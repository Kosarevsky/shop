import React from 'react';
import S from './Products.styled';
import ProductsCard from './card/ProductsCard';
import IsLoading from '../../ui/isLoading/IsLoading';
import ShopWrapper from '../../shopWrapper/ShopWrapper.styled';
import { t } from 'i18next';
import { useAppSelector } from '../../../store/store';
import SubHeader from '../../subHeader/SubHeader';

const Products: React.FC = () => {

    const products = useAppSelector((state) => state.products.products);
    const isLoading = useAppSelector((state) => state.products.isLoading)

    return (
        <>
            <SubHeader showOnlySearchString={false} />
            <ShopWrapper>

                <S.container>
                    <S.menu style={{ width: "300px;" }}>
                    </S.menu>

                    {isLoading
                        ? <IsLoading />
                        : (<S.items>
                            {products.map((product) => (
                                <ProductsCard
                                    key={product.id}
                                    item={product}
                                />
                            ))}
                            {products.length === 0 && <div>{t("not_found_product")}</div>}
                        </S.items>)}

                </S.container>
            </ShopWrapper>
        </>
    );
};

export default Products;