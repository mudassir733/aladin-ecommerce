// src/app/account/layout.js
import Link from 'next/link';
import Image from 'next/image';
import ProfileSidebar from '@/features/MyAccount/ProfileSideBar';
import HeaderSecnd from '@/components/Header_secnd/HeaderSecnd';

export default function AccountLayout({ children }) {

    return (
        <>
            <HeaderSecnd />
            <div className="flex min-h-screen md:px-[50px] w-full">
                {/* Sidebar */}
                <ProfileSidebar />

                {/* Main Content */}
                <main className="flex-1 bg-gray-100 p-6">
                    {children}
                </main>
            </div>
        </>
    );
}
