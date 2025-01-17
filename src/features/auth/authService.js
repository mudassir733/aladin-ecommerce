import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const loginUserApi = async (credentials) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/auth/login`, credentials);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }

}


export const registerUserApi = async (credentials) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/auth/register`, credentials);
        console.log("RESPONSE", response.data);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
}