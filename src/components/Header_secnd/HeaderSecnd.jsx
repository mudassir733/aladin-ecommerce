
"use server"
import { cookies } from "next/headers";
import HeaderSecndClient from "./HeaderSecndClient"
import axios from "axios";
import { redirect } from "next/navigation";
import Cookies from "js-cookie";


const categories = ['All Categories', 'Electronics', 'Clothing', 'Books']

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
    return (
        <>
            <HeaderSecndClient categories={categories} name={userData.firstName} />
        </>
    )
}

