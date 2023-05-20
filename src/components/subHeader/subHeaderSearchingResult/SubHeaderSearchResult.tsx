import { useAppSelector } from '../../../store/store';
import S from './SubHeaderSearchResult.styled';
import { t } from 'i18next';
import SubHeaderSearchResultCard from './card/SubHeaderSearchResultCard';

interface ISubHeaderSearchResultPropsType {
    searchText: string;
}

const SubHeaderSearchingResult: React.FC<ISubHeaderSearchResultPropsType> = ({ searchText }) => {
    const foundProducts = useAppSelector((state) => state.products.products);
    const isLoading = useAppSelector((state) => state.products.isLoading);
    return (
        <S.container>
            <S.subContainer>
                <h5 style={{ padding: "0px 0px 20px" }}>
                    {t("subHeaderSearch.resultSearchQuery")} : {searchText} ({t('search')} {foundProducts.length}{t('unit.pc')})
                </h5>
                {foundProducts && foundProducts.map((item) => (
                    <SubHeaderSearchResultCard key={item.id} item={item} />
                ))}
            </S.subContainer>
        </S.container >
    );
};

export default SubHeaderSearchingResult;