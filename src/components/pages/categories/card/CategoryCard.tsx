import React from 'react';
import CategoryType from '../../../../types/categoriesTypes';
import S from './CategoryCard.styled';
import { useNavigate } from 'react-router-dom';

interface PropsType {
    dataItem: CategoryType;
}

const CategoryCard: React.FC<PropsType> = ({ dataItem }) => {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/category/${dataItem.id}`)
    }


    return (
        <S.container onClick={handleClick}>
            <S.content>
                {dataItem.visibleName}
            </S.content>
        </S.container>
    );
};

export default CategoryCard;