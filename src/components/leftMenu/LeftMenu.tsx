import React, { useEffect } from 'react';
import S from './LeftMenu.styled.';
import { t } from 'i18next'
import { useAppDispatch, useAppSelector } from '../../store/store';
import { categoryActions } from '../../store/category/categorySlice';

const LeftMenu: React.FC = () => {
    const categories = useAppSelector((state) => state.categories.categories);
    const isLoading = useAppSelector((state) => state.categories.isLoading);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(categoryActions.getCategories())
    }, [])

    return (
        <S.container>
            <S.title>
                {t("left_menu.title")}
            </S.title>
            <S.content>
                <ul>
                    {categories.filter(x => x.id > 2).map((category) => (
                        <li key={category.id}>
                            <S.a href={`/category/${category.id}`}>{category.visibleName}</S.a>
                        </li>
                    ))}
                </ul>
            </S.content>
        </S.container >
    )
}


export default LeftMenu;