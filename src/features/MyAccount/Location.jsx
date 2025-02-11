'use client'

import { useState } from 'react'
import { MapPin, Plus, Edit2, Trash2 } from 'lucide-react'
import AddressForm from './AddressForm'
import GoogleMaps from '@/components/GoogleMap/GoogleMaps'

const initialAddresses = [
    {
        id: 1,
        type: 'Home',
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA'
    },
    {
        id: 2,
        type: 'Work',
        street: '456 Business Ave',
        city: 'San Francisco',
        state: 'CA',
        zip: '94105',
        country: 'USA'
    }
]

export default function Location() {
    const [addresses, setAddresses] = useState(initialAddresses)
    const [editingAddress, setEditingAddress] = useState(null)
    const [isAddingNew, setIsAddingNew] = useState(false)

    const handleAddAddress = (newAddress) => {
        setAddresses([...addresses, { ...newAddress, id: Date.now() }])
        setIsAddingNew(false)
    }

    const handleEditAddress = (updatedAddress) => {
        setAddresses(addresses.map(addr => addr.id === updatedAddress.id ? updatedAddress : addr))
        setEditingAddress(null)
    }

    const handleDeleteAddress = (id) => {
        setAddresses(addresses.filter(addr => addr.id !== id))
    }

    return (
        <div className="w-full p-6 mx-auto">
            <h1 className="text-2xl font-semibold text-primaryMedium mb-8">My Locations</h1>


            <div className="shadow-lg h-64 rounded-lg mb-8 flex items-center justify-center">
                <GoogleMaps />
            </div>


            <div className="bg-primaryMedium shadow-lg rounded-lg p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Saved Addresses</h2>
                <div className="space-y-4">
                    {addresses.map(address => (
                        <div key={address.id} className="flex items-center justify-between bg-primaryLight p-4 rounded-lg">
                            <div>
                                <h3 className="text-white font-medium">{address.type}</h3>
                                <p className="text-gray-200 text-sm">{address.street}, {address.city}, {address.state} {address.zip}</p>
                            </div>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => setEditingAddress(address)}
                                    className="text-gray-200 hover:text-teal-400"
                                >
                                    <Edit2 size={18} />
                                </button>
                                <button
                                    onClick={() => handleDeleteAddress(address.id)}
                                    className="text-red-500 hover:text-red-400"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>


                {!isAddingNew && !editingAddress && (
                    <button
                        onClick={() => setIsAddingNew(true)}
                        className="mt-4 flex items-center text-gray-200 hover:text-white transition-all duration-200"
                    >
                        <Plus size={18} className="mr-2" />
                        Add New Address
                    </button>
                )}


                {(isAddingNew || editingAddress) && (
                    <AddressForm
                        address={editingAddress}
                        onSubmit={editingAddress ? handleEditAddress : handleAddAddress}
                        onCancel={() => {
                            setIsAddingNew(false)
                            setEditingAddress(null)
                        }}
                    />
                )}
            </div>
        </div>
    )
}

