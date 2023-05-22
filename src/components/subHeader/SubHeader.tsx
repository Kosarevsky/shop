import ShopWrapper from '../shopWrapper/ShopWrapper.styled';
import S, { StyledGiHamburgerMenu, StyledGoSearch, StyledMdClear, StyledTextField } from './SubHeader.styled';
import useDebounceValue from '../hooks/useDebounceValue';
import { useEffect, useState } from 'react';
import { FormControl, InputAdornment } from '@mui/material';
import ParamsApiType from '../../types/paramsApiType';
import { productsAction } from '../../store/products/productsSlice';
import { useAppDispatch } from '../../store/store';
import SubHeaderSearchingResult from './subHeaderSearchingResult/SubHeaderSearchResult';
import MenuLeft from '../menu/menuLeft/MenuLeft';
import { useLocation } from 'react-router-dom';
import paramsApiProductsByCategoryIdType from '../../types/paramsApiProductsByCategoryIdType';
import { t } from 'i18next';


interface ISubHeaderPropsType {
    showOnlySearchString: boolean;
}
const SubHeader: React.FC<ISubHeaderPropsType> = ({ showOnlySearchString }) => {
    const dispatch = useAppDispatch()
    const [sortField, setSortField] = useState('id');
    const [sortDir, setSortDir] = useState('desc');
    const [page, setPage] = useState(1);
    const [query, debounceQuery, setQuery] = useDebounceValue("", 500);
    const [isSearchHovered, setIsSearchHovered] = useState(false);
    const [isMenuHovered, setIsMenuHovered] = useState(false);


    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const categoryId = +(searchParams.get('c') ?? 0);


    const handleClick = (): void => {
        setQuery('')
    };

    const [showClearIcon, setShowClearIcon] = useState("none");

    const setTrueIsSearchHovered = () => {
        setIsSearchHovered(true);
    }

    const setFalseIsSearchHovered = () => {
        setIsSearchHovered(false);
    }
    const handleMouseEnter: React.MouseEventHandler<EventTarget> = (): void => {
        setTrueIsSearchHovered()
    };


    const setToggleIsMenuHovered = () => {
        setIsMenuHovered(!isMenuHovered);
    }

    const handleMouseLeave: React.MouseEventHandler<EventTarget> = (): void => {
        setFalseIsSearchHovered();
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const value = event.target.value;
        setQuery(value);
        setShowClearIcon(event.target.value === "" ? "none" : "flex");
    };

    const fetchData = (filter: Partial<ParamsApiType> = {}) => {
        dispatch(productsAction.getProducts({
            sortField,
            sortDir,
            query: debounceQuery,
            limit: 12,
            page,
            ...filter,
        }));
    };

    const fetchDataWithCategory = (filter: Partial<paramsApiProductsByCategoryIdType> = {}) => {
        dispatch(productsAction.getProductByCategoryId({
            sortField,
            sortDir,
            query: debounceQuery,
            limit: 12,
            page,
            categoryId,
            ...filter,
        }));
    };

    useEffect(() => {
        if (categoryId > 1) {
            fetchDataWithCategory()
        } else {
            fetchData();
        }

        setTrueIsSearchHovered();
    }, [debounceQuery]);

    return (
        <ShopWrapper>
            <S.container>
                <S.ul>
                    <li>
                        <StyledGiHamburgerMenu
                            onClick={setToggleIsMenuHovered}
                        />
                        <div>
                            {isMenuHovered && (<MenuLeft zIndex={1} position="absolute" />)}
                        </div>

                    </li>
                    <li style={{ maxWidth: "50%" }}>
                        <FormControl
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onClick={setFalseIsSearchHovered}
                        >
                            <StyledTextField
                                size="small"
                                variant="outlined"
                                value={query}
                                onChange={handleChange}

                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <StyledGoSearch />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment
                                            position="end"
                                            style={{ display: showClearIcon }}
                                            onClick={handleClick}
                                        >
                                            <StyledMdClear />
                                        </InputAdornment>
                                    )
                                }}
                            />
                            <div>
                                {isSearchHovered && query.length > 0 && (<SubHeaderSearchingResult searchText={query} />)}
                            </div>
                        </FormControl>
                    </li>
                </S.ul>
            </S.container>

            {!showOnlySearchString &&
                (<S.containerBottom>
                    <S.menu>
                        <MenuLeft></MenuLeft>
                    </S.menu>

                    <S.filter>
                        <S.filterTitle>
                            <h2>{t('view_options')}</h2>
                        </S.filterTitle>
                        <h3>
                        </h3>
                    </S.filter>
                </S.containerBottom>)
            }
        </ShopWrapper>
    );
};

export default SubHeader;