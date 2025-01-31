import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_CALL || "http://localhost:5000";

// Default API Client
const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: false,
});


export const getApiClient = (customConfig = {}) => {
    return axios.create({
        baseURL: BASE_URL,
        withCredentials: customConfig.withCredentials ?? apiClient.defaults.withCredentials,
        headers: {
            ...apiClient.defaults.headers,
            ...customConfig.headers,
        },
        ...customConfig,
    });
};

export default apiClient;
