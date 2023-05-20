import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../types/productType";
import productsApi from "../../api/products/productsApi";

interface ProductStateType {
    product: ProductType | null;
    error: string | null;
    isLoading: boolean;
}

const initialState: ProductStateType = {
    product: null,
    error: null,
    isLoading: false,
};

const getProduct = createAsyncThunk<
    ProductType,
    number,
    { rejectValue: string }
>("product/getProduct", async (productId, thunksApi) => {
    try {
        const response = await productsApi.getProductItem(productId);
        return response.data;
    } catch {
        return thunksApi.rejectWithValue("Server error");
    }
});

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProduct.pending, (state) => {
            state.isLoading = true;
            state.error = null;
            state.product = null;
        });
        builder.addCase(getProduct.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload ?? null;
        });
        builder.addCase(getProduct.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.product = payload;
        });
    },
});

export const productActions = {
    ...productSlice.actions,
    getProduct,
};

const ProductReducer = productSlice.reducer;
export default ProductReducer;
