import React from 'react';
import CategoryType from '../../../../types/categoriesTypes';
import S from './CategoryCard.styled';

interface PropsType {
    dataItem: CategoryType;
}

const CategoryCard: React.FC<PropsType> = ({ dataItem }) => {
    return (
        <S.container>
            <S.content>
                {dataItem.visibleName}
            </S.content>
        </S.container>
    );
};

export default CategoryCard;