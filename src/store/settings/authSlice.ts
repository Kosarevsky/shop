import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TokenRequestType } from "../../types/tokenRequestType";
import { TokenResponseType } from "../../types/tokenResponceType";
import authApi from "../../api/auth/authApi";
import { AxiosError } from "axios";

interface AuthStateType {
    isLogged: boolean;
    accessToken: string;
    refreshToken: string;
    isLoading: boolean;
    error?: string;
    id?: number | null;
    username?: string;
    email?: string;
}

const getIdFromToken = (token: string): number | null => {
    try {
        const base64Url = token.split(".")[1];
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        const jsonPayload = decodeURIComponent(
            window
                .atob(base64)
                .split("")
                .map(function (c) {
                    return (
                        "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)
                    );
                })
                .join("")
        );

        return JSON.parse(jsonPayload).user_id;
    } catch {
        return null;
    }
};

const getInitialState = (): AuthStateType => {
    const accessToken = localStorage.getItem("accessToken") ?? "";
    const refreshToken = localStorage.getItem("refreshToken") ?? "";
    const isLogged = !!(accessToken && refreshToken);
    const id = getIdFromToken(accessToken);

    return {
        isLogged,
        accessToken: isLogged ? accessToken : "",
        refreshToken: isLogged ? refreshToken : "",
        isLoading: false,
        error: undefined,
        id,
    };
};

const createTokens = createAsyncThunk<
    TokenResponseType,
    TokenRequestType,
    { rejectValue: string }
>("auth/createTokens", async (data, thunksApi) => {
    try {
        const response = await authApi.createTokens(data);
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError && error.response?.data?.detail) {
            return thunksApi.rejectWithValue(error.response.data.detail);
        }
        return thunksApi.rejectWithValue("Login error");
    }
});

const authSlice = createSlice({
    name: "auth",
    initialState: getInitialState(),
    reducers: {},
    extraReducers: {},
});

export const authActions = {
    ...authSlice.actions,
    createTokens,
};

const authReducer = authSlice.reducer;
export default authReducer;
