import { setLoading, setUser, setError } from "./authSlice";
import { loginUserApi, registerUserApi, updateUserProfileApi, verifyEmailApi } from "./authService";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const loginUser = (credentials) => async (dispatch) => {
    dispatch(setLoading(true))
    try {
        const response = await loginUserApi(credentials)
        console.log("RESPONSE", response);
        dispatch(setLoading(false))
        return dispatch(setUser(response.data))

    } catch (error) {
        dispatch(setError(error.response))
        dispatch(setLoading(false))

    } finally {
        dispatch(setError(null))
    }
}



export const registerUser = (credentials) => async (dispatch) => {
    dispatch(setLoading(true))
    try {
        const response = await registerUserApi(credentials)
        console.log("RESPONSE 11", response);
        toast.success("Registration successful! Check your email to verify your account.");
        dispatch(setLoading(false))
        return dispatch(setUser(response.data))
    } catch (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
        dispatch(setError(errorMessage))
        if (Array.isArray(errorMessage)) {
            errorMessage.forEach((msg) => toast.error(msg))

        } else {
            toast.error(errorMessage)
        }
    } finally {
        dispatch(setLoading(false))
    }
}

// very email
export const verifyEmail = createAsyncThunk(
    "auth/verifyEmail",
    async (token, { rejectWithValue }) => {
        try {
            const response = await verifyEmailApi(token);
            console.log("EMAIL RESPONSE", response);

            const newToken = response?.access_token;
            if (newToken) {
                Cookies.set("access_token", newToken, { expires: 30 });
            }
            return response;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error.message);
        }
    }
);



export const updateUserProfile = (formData) => async (dispatch) => {
    dispatch(setLoading(true))
    try {
        const updateUser = await updateUserProfileApi(formData)
        dispatch(setUser(updateUser))
        console.log("Updated user", updateUser);
        return updateUser;
    } catch (error) {
        console.log("ERROR", error);
        const errorMessage = error.message;
        toast.error(errorMessage)
    } finally {
        dispatch(setLoading(false))
    }

}