import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { productActions } from '../../../store/product/productSlice';
import IsLoading from '../../ui/isLoadind/IsLoading';

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
            {isLoading && <IsLoading />}

            {product && (
                <div>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                </div>
            )}
        </div>
    );
};

export default ProductItem;