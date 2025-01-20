'use client'

import { useState } from 'react'
import { CreditCard, Plus, Edit2, Trash2 } from 'lucide-react'
import PaymentMethodForm from './PaymentMethodForm'

const initialPaymentMethods = [
    {
        id: 1,
        type: 'Visa',
        cardNumber: '**** **** **** 1234',
        expiryDate: '12/24',
        cardHolder: 'John Doe'
    },
    {
        id: 2,
        type: 'Mastercard',
        cardNumber: '**** **** **** 5678',
        expiryDate: '06/25',
        cardHolder: 'Jane Smith'
    }
]

export default function Payments() {
    const [paymentMethods, setPaymentMethods] = useState(initialPaymentMethods)
    const [editingMethod, setEditingMethod] = useState(null)
    const [isAddingNew, setIsAddingNew] = useState(false)

    const handleAddPaymentMethod = (newMethod) => {
        setPaymentMethods([...paymentMethods, { ...newMethod, id: Date.now() }])
        setIsAddingNew(false)
    }

    const handleEditPaymentMethod = (updatedMethod) => {
        setPaymentMethods(methods => methods.map(method =>
            method.id === updatedMethod.id ? updatedMethod : method
        ))
        setEditingMethod(null)
    }

    const handleDeletePaymentMethod = (id) => {
        setPaymentMethods(methods => methods.filter(method => method.id !== id))
    }

    return (
        <div className="w-full p-6 mx-auto">
            <h1 className="text-2xl font-semibold text-primaryMedium mb-8">Payment Methods</h1>

            <div className="bg-primaryMedium shadow-lg rounded-lg p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Saved Payment Methods</h2>
                <div className="space-y-4">
                    {paymentMethods.map(method => (
                        <div key={method.id} className="flex items-center justify-between bg-primaryLight p-4 rounded-lg">
                            <div className="flex items-center">
                                <CreditCard className="text-teal-200 mr-4" size={24} />
                                <div>
                                    <h3 className="text-white font-medium">{method.type}</h3>
                                    <p className="text-gray-200 text-sm">{method.cardNumber}</p>
                                    <p className="text-gray-200 text-sm">Expires: {method.expiryDate}</p>
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => setEditingMethod(method)}
                                    className="text-teal-200 hover:text-teal-400"
                                >
                                    <Edit2 size={18} />
                                </button>
                                <button
                                    onClick={() => handleDeletePaymentMethod(method.id)}
                                    className="text-red-500 hover:text-red-400"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Add New Payment Method Button */}
                {!isAddingNew && !editingMethod && (
                    <button
                        onClick={() => setIsAddingNew(true)}
                        className="mt-4 flex items-center text-teal-200 hover:text-teal-400 duration-200 transition-all"
                    >
                        <Plus size={18} className="mr-2" />
                        Add New Payment Method
                    </button>
                )}

                {/* Payment Method Form */}
                {(isAddingNew || editingMethod) && (
                    <PaymentMethodForm
                        method={editingMethod}
                        onSubmit={editingMethod ? handleEditPaymentMethod : handleAddPaymentMethod}
                        onCancel={() => {
                            setIsAddingNew(false)
                            setEditingMethod(null)
                        }}
                    />
                )}
            </div>
        </div>
    )
}

