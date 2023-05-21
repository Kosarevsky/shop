import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/store';
import { categoryActions } from '../../../../store/category/categorySlice';
import S from './HomeCategories.styled';
import CategoryCard from './card/HomeCategoryCard';
import IsLoading from '../../../ui/isLoading/IsLoading';

const HomeCategories: React.FC = () => {
    const categories = useAppSelector((state) => state.categories.categories);
    const isLoading = useAppSelector((state) => state.categories.isLoading);
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(categoryActions.getCategories())
    }, [])

    return (
        <S.container >
            {isLoading ?
                <IsLoading />
                : (
                    <S.list>
                        {categories.filter(x => x.id >= 2).map((category) => (
                            <CategoryCard
                                key={category.id}
                                dataItem={category}
                            />
                        ))}
                    </S.list>
                )
            }
        </S.container>
    );
};

export default HomeCategories;

