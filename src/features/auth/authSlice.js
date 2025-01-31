import { createSlice } from "@reduxjs/toolkit";
import { verifyEmail } from "./authThunk";

const initialState = {
    user: null,
    image: null,
    isAuthenticated: false,
    isError: false,
    isSuccess: false,
    isLoading: false
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
        setUser(state, action) {
            state.user = action.payload;
            state.isError = false;
            state.isSuccess = true;
            state.isLoading = false;
            state.image = action.payload.image || null;
        },
        setError(state, action) {
            state.isError = action.payload;
            state.isLoading = false;
        },
        setImage(state, action) {
            state.image = action.payload;

        },
        logout(state) {
            state.user = null;
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(verifyEmail.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(verifyEmail.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(verifyEmail.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = action.payload;
            });
    }
})

export const { setLoading, setUser, setToken, setError, logout, setImage } = authSlice.actions;
export default authSlice.reducer;