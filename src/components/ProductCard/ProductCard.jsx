import Image from 'next/image'
import Link from 'next/link'
// Components
import StarRating from '@/components/StarRating/StarRating'

export default function ProductCard({ product }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative aspect-square">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-4">
                <h3 className="text-sm text-3 font-medium line-clamp-2">
                    {product.title}
                </h3>
                <div className="mt-2 flex items-center">
                    <StarRating rating={product.rating} count={337762} />
                    <span className="ml-2 text-sm text-gray-500">
                        ({product.rating})
                    </span>
                </div>
                <div className="mt-2 text-sm text-3 flex items-center justify-between">
                    ${product.priceRange.min.toFixed(2)} - ${product.priceRange.max.toFixed(2)}

                    <Link href={`/products/${product.id}`}>
                        <button className='bg-primaryMedium px-4 py-2 text-white rounded-md'>
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

