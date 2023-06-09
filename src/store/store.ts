import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux/es/types";
import settingsReducer from "./settings/settingsSlice";
import authReducer from "./settings/authSlice";
import categoryReducer from "./category/categorySlice";
import productsReducer from "./products/productsSlice";
import productReducer from "./product/productSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        settings: settingsReducer,
        categories: categoryReducer,
        products: productsReducer,
        product: productReducer,
    },
});

type AppDispatchType = typeof store.dispatch;

export const useAppDispatch: () => AppDispatchType = useDispatch;

type RootStateType = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
