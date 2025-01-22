import apiClient from "@/services/auth.client";
import { toast } from "react-toastify";



export const loginUserApi = async (credentials) => {
    try {
        const response = await apiClient.post('/api/auth/login', credentials);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }

}


export const registerUserApi = async (credentials) => {
    try {
        const response = await apiClient.post('/api/auth/register', credentials);
        console.log("RESPONSE", response.data);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
}


export const updateUserProfileApi = async (formData) => {
    try {
        const response = await apiClient.patch('/api/users/me', formData);
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