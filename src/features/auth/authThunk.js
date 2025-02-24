import { setLoading, setUser, setError } from "./authSlice";
import { loginUserApi, registerUserApi, updateUserProfileApi } from "./authService";
import { toast } from "react-toastify";
import Cookies from "js-cookie";



export const loginUser = (credentials) => async (dispatch) => {
    dispatch(setLoading(true))
    try {
        const response = await loginUserApi(credentials)
        console.log("RESPONSE", response);
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
        const response = await registerUserApi(credentials);
        console.log("RESPONSE 11", response);
        if (response?.data?.status === "success") {
            toast.success("Your account has been registered successfully!");
            const token = response?.data?.data?.access_token;
            Cookies.set("access_token", token, { expires: 30 });

        }
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