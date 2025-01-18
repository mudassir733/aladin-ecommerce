import { products } from '@/app/products/data/products'

const requestCart = () => {
    //Requisition in cart
    const cart = [products[0], products[1]];
    return cart;

};
    
export default function OrderSummary() {
    const items = requestCart();


    const subtotal = items.reduce((acumulator, item) => {
        return acumulator + item.priceRange.min;
    },0)
    const shipping = '12.87'; //Function Request shipping
    const total = subtotal + Number.parseInt(shipping) ;

    return (
        <div className="max-lg:w-2/5 w-[30%] p-6  mt-6 lg:mt-0">
            <h2 className="text-lg font-medium text-gray-900 mb-4 border-b pb-2.5 ">Order Summary</h2>
            <p className="border-b pb-2.5   text-[#0B8BA6]">{items.length < 1 ? `${items.length} Item` : `${items.length} Itens`}</p>
            <div className="space-y-4">
                {items.map((item) => (
                    <div className="flex space-x-4 mt-2" key={item.id}>
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-md"
                        />
                        <div>
                            <p>{item.name}</p>
                            <p className="text-gray-600 text-sm">Brand: {item.brand}</p>
                            <p className="font-bold">{item.priceRange.min}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-4">
                <p className="flex justify-between">
                    <span>SUBTOTAL</span> <span>${subtotal}</span>
                </p>
                <p className="flex justify-between">
                    <span>Shipping</span> <span>${shipping}</span>
                </p>
                <p className="flex justify-between font-bold">
                    <span>Order Total</span> <span >${total}</span>
                </p>
            </div>
            <button className="mt-6 w-full bg-[#0B8BA6] text-white py-2 rounded-md">
                Continue
            </button>
            <p className="mt-4 text-sm text-gray-600 text-center">
                <a href="/return-policy" className="underline">
                    RETURN POLICY
                </a>{' '}
                |{' '}
                <a href="/help" className="underline">
                    HELP
                </a>
            </p>
        </div>
    );
};

