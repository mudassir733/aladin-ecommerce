import { setLoading, setUser, setError } from "./authSlice";
import { loginUserApi, registerUserApi } from "./authService";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

export const loginUser = (credentials) => async (dispatch) => {
    dispatch(setLoading(true))
    try {
        const response = await loginUserApi(credentials)
        console.log("RESPONSE", response);
        Cookies.set('access_token', response.access_token)
        dispatch(setLoading(false))
        return dispatch(setUser(response))

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
        console.log("RESPONSE", response);
        Cookies.set('access_token', response.access_token)
        dispatch(setLoading(false))
        return dispatch(setUser(response))
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