import React from 'react';
import CategoryType from '../../../../types/categoriesTypes';
import S from './CategoryCard.styled';

interface PropsType {
    dataItem: CategoryType;
}

const CategoryCard: React.FC<PropsType> = ({ dataItem }) => {
    return (
        <S.container>
            {dataItem.visibleName}
        </S.container>
    );
};

export default CategoryCard;