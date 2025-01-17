'use client'

import { useState } from 'react'
import { Package, ChevronDown, ChevronUp } from 'lucide-react'
import OrderDetails from './OrderDetails'

const orders = [
    {
        id: '1234',
        date: '2024-01-15',
        total: 129.99,
        status: 'Delivered',
        items: [
            { name: 'Wireless Headphones', quantity: 1, price: 79.99 },
            { name: 'Phone Case', quantity: 1, price: 19.99 },
            { name: 'Screen Protector', quantity: 2, price: 15.00 }
        ]
    },
    {
        id: '5678',
        date: '2024-01-10',
        total: 54.99,
        status: 'In Transit',
        items: [
            { name: 'Fitness Tracker', quantity: 1, price: 54.99 }
        ]
    },
    {
        id: '9012',
        date: '2024-01-05',
        total: 89.97,
        status: 'Processing',
        items: [
            { name: 'Smart Home Hub', quantity: 1, price: 89.97 }
        ]
    }
]



export default function Orders() {
    const [expandedOrder, setExpandedOrder] = useState(null)

    const toggleOrderDetails = (orderId) => {
        setExpandedOrder(expandedOrder === orderId ? null : orderId)
    }

    const getStatusClass = (status) => {
        switch (status) {
            case 'Delivered':
                return 'text-yellow-500';
            case 'In Transit':
                return 'text-red-500';
            case 'Processing':
                return 'text-green-400';
            default:
                return 'text-gray-400'
        }
    }

    return (
        <div className="w-full p-6 mx-auto">
            <h1 className="text-2xl font-semibold text-primaryMedium mb-8">My Orders</h1>

            <div className="space-y-6">
                {orders.map((order) => (
                    <div key={order.id} className="bg-primaryMedium shadow-lg rounded-lg overflow-hidden">
                        <div
                            className="p-6 flex items-center justify-between cursor-pointer"
                            onClick={() => toggleOrderDetails(order.id)}
                        >
                            <div className="flex items-center gap-4">
                                <Package className="text-white" size={24} />
                                <div>
                                    <p className="text-white font-medium">Order #{order.id}</p>
                                    <p className="text-sm text-gray-200">
                                        {new Date(order.date).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div>
                                    <p className="text-white font-medium">${order.total.toFixed(2)}</p>
                                    <p className={`text-sm text-gray-400 ${getStatusClass(order.status)}`}>{order.status}</p>
                                </div>
                                {expandedOrder === order.id ? (
                                    <ChevronUp className="text-gray-200" size={20} />
                                ) : (
                                    <ChevronDown className="text-gray-200" size={20} />
                                )}
                            </div>
                        </div>
                        {expandedOrder === order.id && <OrderDetails order={order} />}
                    </div>
                ))}
            </div>
        </div>
    )
}

