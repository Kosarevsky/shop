import React, { useEffect, useState } from 'react';
import S from './Products.styled';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { productsAction } from '../../../store/products/productsSlice';
import ParamsApiType from '../../../types/paramsApiType';
import ProductsCard from './card/ProductsCard';
import IsLoading from '../../ui/isLoading/IsLoading';

const Products: React.FC = () => {

    const products = useAppSelector((state) => state.products.products);
    const isLoading = useAppSelector((state) => state.products.isLoading)
    const dispatch = useAppDispatch()
    const [sortField, setSortField] = useState("id");
    const [sortDir, setSortDir] = useState("asc");
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("");


    const fetchData = (filter: Partial<ParamsApiType> = {}) => {
        dispatch(productsAction.getProducts({
            sortField,
            sortDir,
            query,
            limit: 6,
            page,
            ...filter,
        }));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <S.container>
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
    );
};

export default Products;