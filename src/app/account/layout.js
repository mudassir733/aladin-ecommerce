// src/app/account/layout.js
import Link from 'next/link';
import Image from 'next/image';
import ProfileSidebar from '@/features/MyAccount/ProfileSideBar';
import HeaderSecnd from '@/components/Header_secnd/HeaderSecnd';
import { cookies } from 'next/headers';
import Cookies from 'js-cookie';
import { redirect } from 'next/navigation';
import axios from 'axios';

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
        console.log("Hello i reached here");
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
            <div className="flex min-h-screen md:px-[50px] w-full">
                {/* Sidebar */}
                <ProfileSidebar image={userData.image} name={userData.firstName} balance={userData.balance} />

                {/* Main Content */}
                <main className="flex-1 p-6">
                    {children}
                </main>
            </div>
        </>
    );
}
