import React from 'react'


// Components
import Sidebar from '@/components/SideBar/SideBar'
import ProductCard from '@/features/products/ProductCard'
import Pagination from '@/components/Pagination/Pagination'
import HeaderSecnd from '@/components/Header_secnd/HeaderSecnd'
import Footer from '@/components/Footer/Footer'


// services
import { getAllProducts } from '@/services/product.service'


export default async function ProductsPage() {

    let data
    try {
        const response = await getAllProducts()
        console.log("get all products", response)
        data = response
    } catch (error) {
        console.error(error)
        data = [];
        return new Error(error.message || "Error getting all products")
    }



    return (
        <div>
            <HeaderSecnd />
            <div className="bg-gray-50 min-h-screen pb-8">
                <div className="mb-8 bg-primary py-8 flex items-center justify-center flex-col">
                    <h1 className="font-bold md:text-[64px] text-[30px] text-white">Aladdin Best sells</h1>
                    <p className="text-1 text-center !text-white pt-2">Our most popular products based on sales.</p>
                </div>
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-8 px-[20px]">

                        <Sidebar />
                        <div className="flex-1">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                                {data.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>

                            <Pagination currentPage={1} totalPages={4} />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
