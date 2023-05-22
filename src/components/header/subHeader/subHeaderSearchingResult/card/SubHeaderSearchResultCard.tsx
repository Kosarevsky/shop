import React from 'react';
import { ProductType } from '../../../../../types/productType';
import S from './SubHeaderSearchResultCard.styled';
import { useNavigate } from 'react-router-dom';

interface IHeaderSearchResultItemPropsType {
    item: ProductType;
}

const SubHeaderSearchingResultCard: React.FC<IHeaderSearchResultItemPropsType> = ({ item }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/product/${item.id}`)
    }

    return (
        <S.container onClick={handleClick}>
            <S.containerIcon
                img={item.images[0].toString()}>
            </S.containerIcon>
            <S.content>
                {item.price}$ {item.title}
            </S.content>
        </S.container>
    );
};

export default SubHeaderSearchingResultCard;