import Image from 'next/image'

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
                    <StarRating rating={product.rating} />
                    <span className="ml-2 text-sm text-gray-500">
                        ({product.rating})
                    </span>
                </div>
                <div className="mt-2 text-sm text-3">
                    ${product.priceRange.min.toFixed(2)} - ${product.priceRange.max.toFixed(2)}
                </div>
            </div>
        </div>
    )
}

