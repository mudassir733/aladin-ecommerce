import { getApiClient } from "@/services/auth.client";
import Cookies from "js-cookie";
import { toast } from "react-toastify";



// instance of api client
const apiDefault = getApiClient();
const api = getApiClient({
    // headers: { "Content-Type": "multipart/form-data" },
    withCredentials: true,
})



export const loginUserApi = async (credentials) => {
    try {
        const response = await apiDefault.post('/api/auth/login', credentials);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }

}


export const registerUserApi = async (credentials) => {

    try {
        const response = await apiDefault.post('/api/auth/register', credentials);
        console.log("RESPONSE", response);
        return response;
    } catch (error) {
        console.log(error);
        throw new Error(error.response.data.message);
    }
}



export const updateUserProfileApi = async (formData) => {
    try {
        const response = await api.patch('/api/users/me', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });
        console.log("update response", response);
        if (response.status === 200) {
            toast.success(response.data.message || "")
        }
        return response.data.data;
    } catch (error) {
        console.error("Error in API call:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || "Something went wrong");
    }
}