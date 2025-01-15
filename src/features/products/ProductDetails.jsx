import React from 'react'


const ProductDetails = () => {
    return (
        <div className='md:px-[70px] px-[10px] pt-6'>
            <h1 className="text-2xl text-primaryMedium mb-4">Product Details</h1>

            <div className='flex flex-col gap-2'>
                <p className='font-bold'>Manufacturer: <span className='!font-normal'>Aladdin</span></p>
                <p className='font-bold'>Product Dimension: <span className='!font-normal'>5 inch</span></p>
                <p className='font-bold'>Item model number: <span className='!font-normal'>Ja20501</span></p>
                <p className='font-bold'>Date first available: <span className='!font-normal'>April 2024</span></p>
                <p className='font-bold'>Product Number: <span className='!font-normal'>Aladdin</span></p>
                <p className='font-bold'>Country Origin: <span className='!font-normal'>Aladdin</span></p>
                <p className='font-bold'>Best Sellers Rank: <span className='!font-normal'>Aladdin</span></p>
            </div>

        </div>
    )
}

export default ProductDetails