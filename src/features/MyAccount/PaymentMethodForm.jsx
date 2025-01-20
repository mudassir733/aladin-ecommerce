import { useState, useEffect } from 'react'

export default function PaymentMethodForm({ method, onSubmit, onCancel }) {
    const [formData, setFormData] = useState({
        type: '',
        cardNumber: '',
        expiryDate: '',
        cardHolder: '',
        cvv: ''
    })

    useEffect(() => {
        if (method) {
            setFormData(method)
        }
    }, [method])

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
            <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-200">Card Type</label>
                <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md bg-primaryLight p-[14px] outline-none border-gray-600 text-white focus:border-teal-500 focus:ring-teal-500"
                    required
                >
                    <option value="">Select Card Type</option>
                    <option value="Visa">Visa</option>
                    <option value="Mastercard">Mastercard</option>
                    <option value="American Express">American Express</option>
                    <option value="Discover">Discover</option>
                </select>
            </div>
            <div>
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-200">Card Number</label>
                <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="**** **** **** ****"
                    className="mt-1 block w-full rounded-md bg-primaryLight p-[13px] outline-none border-gray-600 text-white focus:border-teal-500 focus:ring-teal-500"
                    required
                />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-200">Expiry Date</label>
                    <input
                        type="text"
                        id="expiryDate"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        className="mt-1 block w-full rounded-md bg-primaryLight p-[13px] outline-none border-gray-600 text-white focus:border-teal-500 focus:ring-teal-500"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-200">CVV</label>
                    <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        placeholder="***"
                        className="mt-1 block w-full rounded-md bg-primaryLight p-[13px] outline-none border-gray-600 text-white focus:border-teal-500 focus:ring-teal-500"
                        required
                    />
                </div>
            </div>
            <div>
                <label htmlFor="cardHolder" className="block text-sm font-medium text-gray-200">Card Holder Name</label>
                <input
                    type="text"
                    id="cardHolder"
                    name="cardHolder"
                    value={formData.cardHolder}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md bg-primaryLight p-[13px] outline-none border-gray-600 text-white focus:border-teal-500 focus:ring-teal-500"
                    required
                />
            </div>
            <div className="flex justify-end space-x-4 mt-6">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-4 py-2 border border-primaryLight hover:border-primaryExtraLight rounded-md text-gray-300 hover:bg-primaryExtraLight duration-200 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-teal-500"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primaryLight hover:bg-primaryExtraLight transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-teal-500"
                >
                    {method ? 'Update Payment Method' : 'Add Payment Method'}
                </button>
            </div>
        </form>
    )
}

