'use client'

import { MapPin, Truck, CreditCard } from 'lucide-react'
import { useState } from 'react'

export default function PurchaseDetails() {
    const [quantity, setQuantity] = useState(1)

    return (
        <div className="bg-white p-6 rounded-lg border border-gray-200">
            {/* Delivery Info */}
            <div className="mb-6">
                <div className="text-sm">
                    <p className="font-medium">
                        FREE delivery Sunday, February 5 on $25 of items shipped by Aladdin
                    </p>
                    <p className="mt-1">
                        Or fastest delivery Wednesday, February 1 order within{' '}
                        <span className="text-teal-600">20 hrs 41 mins</span>
                    </p>
                </div>

                <div className="flex items-center gap-2 mt-4 text-sm">
                    <MapPin className="w-4 h-4 text-teal-600" />
                    <button className="text-teal-600 hover:underline">
                        Deliver to New York 10001
                    </button>
                </div>

                <div className="mt-4">
                    <span className="text-green-600 font-medium">In Stock.</span>
                </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
                <select
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="block w-24 py-2 px-3 border border-gray-300 bg-primaryMedium text-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                            Qty: {num}
                        </option>
                    ))}
                </select>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
                <button className="w-full bg-primaryMedium text-white py-3 px-4 rounded-md hover:bg-primaryLight transition-colors">
                    Contact supplier
                </button>
                <button className="w-full border border-teal-600 text-teal-600 py-3 px-4 rounded-md hover:bg-teal-50 transition-colors">
                    Chat now
                </button>
            </div>

            {/* Purchase Details */}
            <div className="mt-6">
                <h3 className="text-lg font-medium mb-4">Purchase details</h3>
                <div className="space-y-4">
                    <button className="flex items-center gap-3 w-full text-left">
                        <Truck className="w-5 h-5 text-primary" />
                        <span className="text-primary">Shipping</span>
                    </button>
                    <button className="flex items-center gap-3 w-full text-left">
                        <CreditCard className="w-5 h-5 text-primary" />
                        <span className="text-primary">Payments</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

