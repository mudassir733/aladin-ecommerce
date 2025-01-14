import { setLoading, setUser, setError } from "./authSlice";
import { loginUserApi, registerUserApi } from "./authService";

export const loginUser = (credentials) => async (dispatch) => {
    dispatch(setLoading(true))
    try {
        const response = await loginUserApi(credentials)
        console.log("RESPONSE", response);
        dispatch(setUser(response.data))
        localStorage.setItem('user', JSON.stringify(response.data))
        dispatch(setLoading(false))

    } catch (error) {
        dispatch(setError(error.response.data.message))
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
        dispatch(setUser(response.data))
        localStorage.setItem('user', JSON.stringify(response.data))
        dispatch(setLoading(false))
    } catch (error) {
        dispatch(setError(error.response.data.message))
        dispatch(setLoading(false))
    } finally {
        dispatch(setError(null))
    }
}