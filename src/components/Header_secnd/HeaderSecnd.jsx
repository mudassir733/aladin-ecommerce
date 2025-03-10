
"use server"
import { cookies } from "next/headers";
import HeaderSecndClient from "./HeaderSecndClient"
import axios from "axios";
import { redirect } from "next/navigation";
import Cookies from "js-cookie";


// service
import { getAllCategories } from '@/services/product.service'

export default async function HeaderSecnd() {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token")?.value
    console.log(token)
    if (!token) {
        redirect('/login')
    }
    let userData;
    try {
        const response = await axios.get("http://localhost:5000/api/users/me", {
            headers: {
                Cookie: `access_token=${token}`,

            },
        });
        if (!response.status === 401) {
            redirect('/login')
        }
        userData = response.data.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            console.log('Session expired. Redirecting to login...');
            Cookies.remove("access_token");
            redirect('/login')
        }
    }



    // get all categories
    let categories
    try {
        const response = await getAllCategories()
        console.log(response);

        categories = response
    } catch (error) {
        console.error('Error fetching categories:', error)
        categories = []
        return new Error(error.message)

    }
    return (
        <>
            <HeaderSecndClient categories={categories} name={userData.firstName} />
        </>
    )
}

