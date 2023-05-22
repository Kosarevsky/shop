import React, { useEffect } from 'react';
import S from './MenuLeft.styled.';
import { t } from 'i18next'
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { categoryActions } from '../../../store/category/categorySlice';
import { useLocation } from 'react-router-dom';

interface IMenuLeftPropsType {
    zIndex?: number;
    position?: string;
}

const MenuLeft: React.FC<IMenuLeftPropsType> = ({ zIndex, position }) => {
    const categories = useAppSelector((state) => state.categories.categories);
    const dispatch = useAppDispatch();

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const categoryId = +(searchParams.get('c') ?? 0);


    useEffect(() => {
        dispatch(categoryActions.getCategories())
    }, [])

    return (

        <S.container zIndex={zIndex} position={position}>
            {!zIndex && (
                <S.title>
                    {t("left_menu.title")}
                </S.title>
            )}


            <S.content>
                <ul>
                    {categories.filter(x => x.id > 0).map((category) => (
                        <li key={category.id}>
                            <S.a
                                href={`/products/?c=${category.id}`}
                                isActive={categoryId === category.id}
                            >{category.visibleName}
                            </S.a>
                        </li>
                    ))}
                </ul>
            </S.content>
        </S.container >
    )
}


export default MenuLeft;