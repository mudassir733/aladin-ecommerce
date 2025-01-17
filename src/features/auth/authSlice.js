import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: null,
    token: null,
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
            state.token = action.payload.token || null;
            state.isError = false;
            state.isSuccess = true;
            state.isLoading = false;
        },
        setError(state, action) {
            state.isError = action.payload;
            state.isLoading = false;
        },
        logout(state) {
            state.user = null;
            state.token = null;
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
        }
    }
})

export const { setLoading, setUser, setError, logout } = authSlice.actions;
export default authSlice.reducer;