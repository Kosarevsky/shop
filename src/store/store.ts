import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux/es/types";
import settingsReducer from "./settings/settingsSlice";
import authReducer from "./settings/authSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        settings: settingsReducer,
    },
});

type AppDispatchType = typeof store.dispatch;

export const useAppDispatch: () => AppDispatchType = useDispatch;

type RootStateType = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
