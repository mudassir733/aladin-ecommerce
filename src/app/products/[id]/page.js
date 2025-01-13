import ProductGallery from '@/components/ProductsGallery/ProductGallery'
import StarRating from '@/components/StarRating/StarRating'
import ProductThumbnails from '@/components/ProductThumbnail/ProductThumbnail'
import PurchaseDetails from '@/components/PurchaseDetails/PurchaseDetails'
import { products } from '@/app/products/data/products'
import HeaderSecnd from '@/components/Header_secnd/HeaderSecnd'

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
            <div className="min-h-screen bg-gray-50 py-8">
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
            </div>
        </>
    )
}

