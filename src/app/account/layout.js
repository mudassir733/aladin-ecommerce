// src/app/account/layout.js

import { cookies } from 'next/headers';
import Cookies from 'js-cookie';
import { redirect } from 'next/navigation';
import axios from 'axios';


// components
import ProfileSidebar from '@/features/MyAccount/ProfileSideBar';
import HeaderSecnd from '@/components/Header_secnd/HeaderSecnd';


export default async function AccountLayout({ children }) {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token")?.value
    console.log(token)
    if (!token) {
        cookieStore.delete("access_token")
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

            Cookies.remove("access_token")
            redirect('/login')
        }
    }

    return (
        <>
            <HeaderSecnd />
            <div className="flex h-screen md:px-[50px] w-full bg-gray-100">

                <ProfileSidebar userImage={userData.image} name={userData.firstName} lastName={userData.lastName} balance={userData.balance} />


                <main className="flex-1">
                    {children}
                </main>
            </div>
        </>
    );
}
