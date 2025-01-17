export default function OrderDetails({ order }) {
    return (
        <div className="px-6 pb-6 border-t border-[#dadada77]">
            <h3 className="text-lg font-medium text-white mt-4 mb-2">Order Items</h3>
            <div className="space-y-2">
                {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                        <span className="text-gray-200">
                            {item.quantity}x {item.name}
                        </span>
                        <span className="text-white">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                ))}
            </div>
            <div className="mt-4 pt-4 border-t border-[#dadada77] flex justify-between">
                <span className="text-gray-200">Total</span>
                <span className="text-white font-medium">${order.total.toFixed(2)}</span>
            </div>
            <div className="mt-6 flex gap-4">
                <button className="flex-1 bg-primaryLight text-white py-2 px-4 rounded-lg hover:bg-primaryExtraLight transition-colors">
                    Track Order
                </button>
                <button className="flex-1 border border-primaryLight hover:border-primaryExtraLight text-white py-2 px-4 rounded-lg hover:bg-primaryExtraLight transition-colors">
                    View Invoice
                </button>
            </div>
        </div>
    )
}

