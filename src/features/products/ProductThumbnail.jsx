import Image from 'next/image'


export default function ProductThumbnail({ product }) {
    return (
        <div className="grid grid-cols-2 gap-4 mt-6 font-roboto">
            {product.productThumb.map((thumbnail, index) => (
                <div
                    key={index}
                    className="relative aspect-square rounded-lg overflow-hidden border border-gray-200 flex flex-col justify-between"
                >
                    <div className='relative h-full w-full'>
                        <Image
                            src={thumbnail}
                            alt={`Product thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col pl-1 mt-4">
                        <span className="text-2 !text-left font-semibold text-gray-800">{product.brand}</span>
                        <span className="text-4 !leading-8 !text-left">$139.99</span>
                    </div>

                </div>

            ))}


        </div>
    )
}

