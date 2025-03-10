import Footer from '@/components/Footer/Footer';
import HeaderSecnd from '@/components/Header_secnd/HeaderSecnd';
import Pagination from '@/components/Pagination/Pagination';
import Sidebar from '@/components/SideBar/SideBar';
import ProductCard from '@/features/products/ProductCard';
import { getAllProducts } from '@/services/product.service';

export default async function Category({ params }) {
    const { slug } = await params;

    try {
        const allProducts = await getAllProducts();

        if (!Array.isArray(allProducts)) {
            throw new Error('Invalid product data received');
        }


        const categories = allProducts.map(prod => prod.category);


        const matchedCategory = categories.find(cat => cat.name.toLowerCase() === slug.toLowerCase());


        const filteredProducts = matchedCategory
            ? allProducts.filter(prod => prod.categoryId === matchedCategory.id)
            : [];

        return (
            <>
                <HeaderSecnd />
                <div className='container mx-auto px-4'>
                    <div className='flex flex-col md:flex-row gap-8'>
                        <Sidebar />
                        <div className='py-[3rem]'>
                            {filteredProducts.length > 0 ? (

                                <div className="container mx-auto">
                                    <div className="flex flex-col md:flex-row gap-8 px-[20px]">

                                        <div className="flex-1">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                                                {filteredProducts.map((product) => (
                                                    <ProductCard key={product.id} product={product} />
                                                ))}
                                            </div>

                                            <Pagination currentPage={1} totalPages={4} />
                                        </div>
                                    </div>
                                </div>



                            ) : (
                                <p>No products found for this category.</p>
                            )}
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    } catch (error) {
        console.error('Error fetching products:', error);
        return <p className="text-red-500">Failed to load products. Please try again later.</p>;
    }
}
