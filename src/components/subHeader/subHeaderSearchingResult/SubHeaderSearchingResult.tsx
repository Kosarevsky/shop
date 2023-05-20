import { useAppSelector } from '../../../store/store';
import S from './SubHeaderSearchingResult.styled';
import { t } from 'i18next';

interface ISubHeaderSearchResultPropsType {
    searchText: string;
}

const SubHeaderSearchingResult: React.FC<ISubHeaderSearchResultPropsType> = ({ searchText }) => {
    const foundProducts = useAppSelector((state) => state.products.products);
    const isLoading = useAppSelector((state) => state.products.isLoading);
    return (
        <S.container>
            <S.subContainer>
                <h5>{t('subHeaderSearch.resultSearchQuery')}: {searchText}</h5>
            </S.subContainer>
        </S.container>
    );
};

export default SubHeaderSearchingResult;