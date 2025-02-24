import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    image: null,
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
    }
})

export const { setLoading, setUser, setToken, setError, logout, setImage } = authSlice.actions;
export default authSlice.reducer;