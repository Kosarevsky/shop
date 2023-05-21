import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../types/productType";
import paramsApiType from "../../types/paramsApiType";
import productsApi from "../../api/products/productsApi";
import paramsApiProductsByCategoryIdType from "../../types/paramsApiProductsByCategoryIdType";

interface ProductStateType {
    products: ProductType[];
    error?: string;
    isLoading: boolean;
}

const initialState: ProductStateType = {
    products: [],
    error: undefined,
    isLoading: false,
};

const getProducts = createAsyncThunk<
    ProductType[],
    paramsApiType,
    { rejectValue: string }
>("products/getProducts", async (data, thunksApi) => {
    try {
        const response = await productsApi.getProducts(data);
        return response.data;
    } catch {
        return thunksApi.rejectWithValue("Server error");
    }
});

const getProductByCategoryId = createAsyncThunk<
    ProductType[],
    paramsApiProductsByCategoryIdType,
    { rejectValue: string }
>("products/getProductByCategoryId", async (data, thunksApi) => {
    try {
        const response = await productsApi.getProductByCategoryId(data);
        return response.data;
    } catch {
        return thunksApi.rejectWithValue("Server error");
    }
});

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(getProducts.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        });
        builder.addCase(getProducts.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.products = payload;
        });

        builder.addCase(getProductByCategoryId.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(
            getProductByCategoryId.rejected,
            (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            }
        );
        builder.addCase(
            getProductByCategoryId.fulfilled,
            (state, { payload }) => {
                state.isLoading = false;
                state.products = payload;
            }
        );
    },
});

export const productsAction = {
    ...productsSlice.actions,
    getProducts,
    getProductByCategoryId,
};

const productsReducer = productsSlice.reducer;
export default productsReducer;
