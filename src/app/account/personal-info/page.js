import ProfileSection from '@/features/MyAccount/ProfileSection'
import axios from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'




export default async function PersonalInfoPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token")?.value
    console.log(token)
    if (!token) {
        redirect('/login')
    }

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
        console.log('User Data:', response.data.data);
    } catch (error) {
        console.error('Error fetching user data:', error.message);
    }


    return (
        <div>
            <ProfileSection />
        </div>
    )
}

