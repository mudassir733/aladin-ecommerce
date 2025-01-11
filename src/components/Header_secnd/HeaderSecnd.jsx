'use client'

import HeaderSecndClient from "./HeaderSecndClient"




const categories = ['All Categories', 'Electronics', 'Clothing', 'Books']

export default function HeaderSecnd() {


    return (
        <>
            <HeaderSecndClient categories={categories} />
        </>
    )
}

