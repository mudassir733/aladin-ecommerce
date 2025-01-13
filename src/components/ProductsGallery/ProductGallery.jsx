'use client'

import { useState } from 'react'
import Image from 'next/image'

const images = [
    {
        thumb: '/placeholder.svg?height=80&width=80',
        full: '/placeholder.svg?height=600&width=600',
        alt: 'Product view 1'
    },
    {
        thumb: '/placeholder.svg?height=80&width=80',
        full: '/placeholder.svg?height=600&width=600',
        alt: 'Product view 2'
    },
    {
        thumb: '/placeholder.svg?height=80&width=80',
        full: '/placeholder.svg?height=600&width=600',
        alt: 'Product view 3'
    },
    {
        thumb: '/placeholder.svg?height=80&width=80',
        full: '/placeholder.svg?height=600&width=600',
        alt: 'Product view 4'
    }
]

export default function ProductGallery({ product }) {
    const [selectedImage, setSelectedImage] = useState(product.thumbnails[0])
    console.log("Product", product.thumbnails);


    return (
        <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible">
                {product.thumbnails.map((thumbnail, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(thumbnail)}
                        className={`relative w-20 h-20 border-2 rounded-lg overflow-hidden flex-shrink-0 
              ${selectedImage === thumbnail ? 'border-teal-500' : 'border-gray-200'}`}
                    >
                        <Image
                            src={thumbnail}
                            alt={`Thumbnails`}
                            fill
                            className="object-cover"
                        />
                    </button>
                ))}
            </div>

            {/* Main Image */}
            <div className="relative md:h-[450px] aspect-square w-full max-w-2xl rounded-lg overflow-hidden">
                <Image
                    src={selectedImage}
                    alt="Selected Image"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </div>
    )
}

