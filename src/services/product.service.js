import { getApiClient } from "./auth.client";


const api = getApiClient({
    headers: {
        "content-type": "application/json"
    }
})

export const getAllCategories = async (data) => {
    try {
        const response = await api.get("/api/categories", data);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to get categories: ${error.message}`);
    }
}

export const getAllProducts = async (data) => {
    try {
        const response = await api.get("/api/products", data);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to get products: ${error.message}`);
    }
}

export const getProductById = async (id) => {
    try {
        const response = await api.get(`/api/products/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(`Failed to get product by id: ${error.message}`);
    }
}