import Image from 'next/image'
import Link from 'next/link'

// Components
import ProductGallery from '@/features/products/ProductGallery'
import StarRating from '@/components/StarRating/StarRating'
import ProductThumbnails from '@/features/products/ProductThumbnail'
import PurchaseDetails from '@/features/products/PurchaseDetails'
import HeaderSecnd from '@/components/Header_secnd/HeaderSecnd'
import Footer from '@/components/Footer/Footer'
import ProductCard from '@/features/products/ProductCard'
import Review from '@/features/review/Review'
import ProductDetails from '@/features/products/ProductDetails'


// services
import { getProductById } from '@/services/product.service'

export default async function ProductPage({ params }) {
    const { id } = params;
    let products
    try {
        const response = await getProductById(id)
        console.log("id product", response);
        products = response
    } catch (error) {
        console.error('Error fetching product:', error)
        products = null;
        return new Error(error.message);

    }

    console.log("PRODUCT", products);

    if (!products) {
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

                        <div className="lg:col-span-1 md:px-0 px-[10px]">
                            <ProductGallery product={products} />
                        </div>


                        <div className="lg:col-span-1  md:px-0 px-[10px]">

                            <div className="mb-8">
                                <h1 className="text-sm heading-2 !text-left !leading-8 font-medium line-clamp-2">
                                    {products.title}
                                </h1>

                                <h4 className='text-3 font-bold py-2'>Brand: <span className='!font-normal text-[#0B8BA6]'>{products.brand}</span></h4>
                                <div className='flex items-center gap-2 text-[#737373]'> <StarRating rating={4} count={337762} /></div>
                                <div className="mt-4 flex gap-2">
                                    {/* <span className="text-2xl font-bold text-red-600 line-through">$139.99</span> */}
                                    <span className="text-2xl font-bold text-secondary">$-{products.price.toFixed(2)}</span>
                                </div>
                                <ProductThumbnails product={products} />
                            </div>
                        </div>
                        <div className='lg:col-span-1 md:px-0 px-[10px]'>
                            <PurchaseDetails />
                        </div>
                    </div>
                </div>


                <div className="bg-gray-50 h-full pb-8 border-b-[1px] border-[#dadada] ">

                    <div className="container mx-auto px-[10px] md:px-[40px]">
                        <div className="flex flex-col md:flex-row gap-8  border-t-[1px] border-[#dadada] pt-8">

                            <div className="flex-1">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300" key={products.id}>
                                        <div className="relative aspect-square">
                                            <Image
                                                src={products.productImage}
                                                alt={products.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-sm text-3 font-medium line-clamp-2">
                                                {products.title}
                                            </h3>
                                            <div className="mt-2 flex items-center">
                                                <StarRating rating={products.rating} count={337762} />
                                                <span className="ml-2 text-sm text-gray-500">
                                                    ({products.rating})
                                                </span>
                                            </div>
                                            <div className="mt-2 text-sm text-3 flex items-center justify-between">
                                                ${products.price}

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ProductDetails products={products} />
                <Review />
            </div>
            <Footer />
        </>
    )
}

