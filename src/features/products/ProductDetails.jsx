import React from 'react'


const ProductDetails = ({ products }) => {

    const formatDimension = (dimension) => {
        if (!dimension) return 'N/A';
        return dimension.split('*').join(' × ');
    };
    return (
        <div className='md:px-[70px] px-[10px] pt-6'>
            <h1 className="text-2xl text-primaryMedium mb-4">Product Details</h1>

            <div className='flex flex-col gap-2'>
                <p className='font-bold'>Manufacturer: <span className='!font-normal'>{products.manufacture}</span></p>
                <p className='font-bold'>Product Dimension: <span className='!font-normal'>{formatDimension(products.productDimension)}</span></p>
                <p className='font-bold'>Item model number: <span className='!font-normal'>{products.itemModelNumber}</span></p>
                <p className='font-bold'>Date first available: <span className='!font-normal'>{products.dateFirstAvailable || "No Date Yet"}</span></p>
                <p className='font-bold'>Product Number: <span className='!font-normal'>{products.productNumber}</span></p>
                <p className='font-bold'>Country Origin: <span className='!font-normal'>{products.countryOrigin}</span></p>
                <p className='font-bold'>Best Sellers Rank: <span className='!font-normal'>{products.bestSellerRank || "Rank 0"}</span></p>
            </div>

        </div>
    )
}

export default ProductDetails