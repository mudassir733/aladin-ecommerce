import Image from 'next/image'
import Link from 'next/link'

// Components
import ProductGallery from '@/features/products/ProductGallery'
import StarRating from '@/components/StarRating/StarRating'
import ProductThumbnails from '@/features/products/ProductThumbnail'
import PurchaseDetails from '@/features/products/PurchaseDetails'
import { products } from '@/app/products/data/products'
import HeaderSecnd from '@/components/Header_secnd/HeaderSecnd'
import Footer from '@/components/Footer/Footer'
import ProductCard from '@/features/products/ProductCard'
import Review from '@/features/review/Review'

export default function ProductPage({ params }) {
    const { id } = params;

    const product = products.find((p) => p.id === parseInt(id));

    console.log("PRODUCT", product);

    if (!product) {
        return (
            <div className="min-h-screen bg-gray-50 py-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-medium text-red-600">Product not found</h1>
                </div>
            </div>
        );
    }

    return (
        <>
            <HeaderSecnd />
            <div className="min-h-screen bg-gray-50 py-8 ">
                <div className="container mx-auto md:px-[30px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div className="lg:col-span-1">
                            <ProductGallery product={product} />
                        </div>


                        <div className="lg:col-span-1">

                            <div className="mb-8">
                                <h1 className="text-sm heading-2 !text-left !leading-8 font-medium line-clamp-2">
                                    {product.title}
                                </h1>

                                <h4 className='text-3 font-bold py-2'>Brand: <span className='!font-normal text-[#0B8BA6]'>{product.brand}</span></h4>
                                <div className='flex items-center gap-2 text-[#737373]'> <StarRating rating={4} count={337762} /></div>
                                <div className="mt-4 flex gap-2">
                                    <span className="text-2xl font-bold text-red-600 line-through">$139.99</span>
                                    <span className="text-2xl font-bold text-secondary">$39.99</span>
                                </div>
                                <ProductThumbnails product={product} />
                            </div>
                        </div>
                        <div className='lg:col-span-1'>
                            <PurchaseDetails />
                        </div>
                    </div>
                </div>


                <div className="bg-gray-50 min-h-screen pb-8 ">

                    <div className="container mx-auto px-4 ">


                        <div className="flex flex-col md:flex-row gap-8 px-[20px] border-t-[1px] border-[#dadada] pt-8">



                            <div className="flex-1">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {products.map((product) => (
                                        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300" key={product.id}>
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

                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>


                            <Review />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

