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

const SubHeader = () => {
    const dispatch = useAppDispatch()
    const [sortField, setSortField] = useState('id');
    const [sortDir, setSortDir] = useState('desc');
    const [page, setPage] = useState(1);
    const [query, debounceQuery, setQuery] = useDebounceValue("", 500);
    const [isSearchHovered, setIsSearchHovered] = useState(false);
    const [isMenuHovered, setIsMenuHovered] = useState(false);

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

    useEffect(() => {
        fetchData();
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
        </ShopWrapper>
    );
};

export default SubHeader;