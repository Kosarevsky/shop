import React, { useEffect, useState } from 'react';
import S from './Products.styled';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { productsAction } from '../../../store/products/productsSlice';
import ProductsCard from './card/ProductsCard';
import IsLoading from '../../ui/isLoading/IsLoading';
import ShopWrapper from '../../shopWrapper/ShopWrapper.styled';
import MenuLeft from '../../menu/menuLeft/MenuLeft';
import paramsApiProductsByCategoryIdType from '../../../types/paramsApiProductsByCategoryIdType';
import { useLocation } from 'react-router-dom';
import useDebounceValue from '../../hooks/useDebounceValue';

const Products: React.FC = () => {

    const products = useAppSelector((state) => state.products.products);
    const isLoading = useAppSelector((state) => state.products.isLoading)
    const dispatch = useAppDispatch()
    const [sortField, setSortField] = useState("id");
    const [sortDir, setSortDir] = useState("desc");
    const [page, setPage] = useState(1);
    const [query, debounceQuery, setQuery] = useDebounceValue("", 500);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const categoryId = +(searchParams.get('c') ?? 0);


    const fetchData = (filter: Partial<paramsApiProductsByCategoryIdType> = {}) => {
        dispatch(productsAction.getProductByCategoryId({
            sortField,
            sortDir,
            query: debounceQuery,
            limit: 6,
            page,
            categoryId,
            ...filter,
        }));
    };

    useEffect(() => {
        if (categoryId === 0) {
            fetchData();
        }
    }, []);

    return (
        <ShopWrapper>

            <S.container>
                <S.menu>
                    <MenuLeft />
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
                    </S.items>)}
            </S.container>
        </ShopWrapper>
    );
};

export default Products;