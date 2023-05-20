import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { productActions } from '../../../store/product/productSlice';

const ProductItem: React.FC = () => {
    const { id } = useParams();
    const isLoading = useAppSelector((state) => state.product.isLoading);
    const product = useAppSelector((state) => state.product.product);
    const dispatch = useAppDispatch();
    console.log(123, product)

    useEffect(() => {
        if (id) {
            dispatch(productActions.getProduct(+id))
        }
    }, [id]);

    return (
        <div>
            ProductItem
        </div>
    );
};

export default ProductItem;