import HeaderSecnd from '@/components/Header_secnd/HeaderSecnd';
import Sidebar from '@/components/SideBar/SideBar'
import React from 'react'

export default async function Category({ params }) {

    const { slug } = params;


    return (
        <>
            <HeaderSecnd />
            <div className='container mx-auto px-4'>

                <div className=' flex flex-col md:flex-row gap-8'>
                    <Sidebar></Sidebar>
                    <div>Category: {slug}</div>
                </div>
            </div>
        </>
    )
}
