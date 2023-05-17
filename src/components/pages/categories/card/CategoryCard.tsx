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
        navigate('/products/');
        // navigate(`/products/${dataItem.id}`)
    }

    return (
        <S.container img={dataItem.image} onClick={handleClick}>
            <S.content>
                {dataItem.visibleName}
            </S.content>
        </S.container>
    );
};

export default CategoryCard;