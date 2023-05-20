import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoriesApi from "../../api/categories/categoriesApi";
import CategoryType, { CategoryStateType } from "../../types/categoriesTypes";

const initialState: CategoryStateType = {
    categories: [],
    error: undefined,
    isLoading: false,
};

const getCategories = createAsyncThunk<
    CategoryType[],
    void,
    { rejectValue: string }
>("categories/getCategories", async (_, thunksApi) => {
    try {
        const response = await categoriesApi.getCategories();
        return response.data;
    } catch {
        return thunksApi.rejectWithValue("Server error");
    }
});

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
        });
        builder.addCase(getCategories.rejected, (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
        });
        builder.addCase(getCategories.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.categories = payload;
        });
    },
});

export const categoryActions = {
    ...categoriesSlice.actions,
    getCategories,
};

const categoriesReducer = categoriesSlice.reducer;
export default categoriesReducer;
