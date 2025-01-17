import { useState, useEffect } from 'react'

export default function AddressForm({ address, onSubmit, onCancel }) {
    const [formData, setFormData] = useState({
        type: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        country: ''
    })

    useEffect(() => {
        if (address) {
            setFormData(address)
        }
    }, [address])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(formData)
    }

    return (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-200">Address Type</label>
                    <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="mt-1 block w-full p-[15px] rounded-md bg-primaryLight border-gray-600 text-white focus:border-primaryLight focus:ring-primaryLight outline-none"
                        required
                    >
                        <option value="">Select Type</option>
                        <option value="Home">Home</option>
                        <option value="Work">Work</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="street" className="block text-sm font-medium text-gray-200">Street Address</label>
                    <input
                        type="text"
                        id="street"
                        name="street"
                        value={formData.street}
                        onChange={handleChange}
                        className="mt-1 block w-full p-[13px] rounded-md bg-primaryLight border-gray-600 text-white focus:border-primaryExtraLight focus:ring-none outline-none"
                        required
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-200">City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="mt-1 block w-full p-[13px] rounded-md bg-primaryLight border-gray-600 text-white focus:border-primaryExtraLight focus:ring-none outline-none"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-200">State</label>
                    <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="mt-1 block w-full p-[13px] rounded-md bg-primaryLight border-gray-600 text-white focus:border-primaryExtraLight focus:ring-none outline-none"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="zip" className="block text-sm font-medium text-gray-200">ZIP Code</label>
                    <input
                        type="text"
                        id="zip"
                        name="zip"
                        value={formData.zip}
                        onChange={handleChange}
                        className="mt-1 block w-full p-[13px] rounded-md bg-primaryLight border-gray-600 text-white focus:border-primaryExtraLight focus:ring-none outline-none"
                        required
                    />
                </div>
            </div>
            <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-200">Country</label>
                <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="mt-1 block w-full p-[13px] rounded-md bg-primaryLight border-gray-600 text-white focus:border-primaryExtraLight focus:ring-none outline-none"
                    required
                />
            </div>
            <div className="flex justify-end space-x-4 mt-6">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-4 py-2 border border-primaryExtraLight transition-all duration-200 rounded-md text-gray-200 hover:bg-primaryExtraLight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-teal-500"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primaryLight hover:bg-primaryExtraLight duration-200 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-teal-500"
                >
                    {address ? 'Update Address' : 'Add Address'}
                </button>
            </div>
        </form>
    )
}

