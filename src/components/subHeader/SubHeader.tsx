import ShopWrapper from '../shopWrapper/ShopWrapper.styled';
import S, { StyledGoSearch, StyledMdClear, StyledTextField } from './SubHeader.styled';
import useDebounceValue from '../hooks/useDebounceValue';
import { useEffect, useState } from 'react';
import { FormControl, InputAdornment } from '@mui/material';
import ParamsApiType from '../../types/paramsApiType';
import { productsAction } from '../../store/products/products.Slice';
import { useAppDispatch } from '../../store/store';
import SubHeaderSearchingResult from './subHeaderSearchingResult/SubHeaderSearchResult';

const SubHeader = () => {
    const dispatch = useAppDispatch()
    const [sortField, setSortField] = useState('id');
    const [sortDir, setSortDir] = useState('desc');
    const [page, setPage] = useState(1);
    const [query, debounceQuery, setQuery] = useDebounceValue("", 500)

    const handleClick = (): void => {
        setQuery('')
    };

    const [showClearIcon, setShowClearIcon] = useState("none");

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
    }, [debounceQuery]);

    return (
        <ShopWrapper>
            <S.container>

                <S.logo >
                </S.logo>
                <S.center>
                </S.center>
                <S.right>
                    <FormControl>
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
                            {query.length > 0 && <SubHeaderSearchingResult searchText={query} />}
                        </div>
                    </FormControl>
                </S.right>
            </S.container>
        </ShopWrapper>
    );
};

export default SubHeader;