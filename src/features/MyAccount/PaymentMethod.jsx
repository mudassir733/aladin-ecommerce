import { CreditCard, Plus } from 'lucide-react'

const paymentMethods = [
    {
        id: 1,
        type: 'Visa',
        last4: '4242',
        expiry: '12/24'
    },
    {
        id: 2,
        type: 'Mastercard',
        last4: '8888',
        expiry: '08/25'
    }
]

export default function PaymentMethods() {
    return (
        <div className="bg-primaryMedium shadow-lg rounded-lg p-6 mb-8">
            <h2 className="text-lg text-white mb-4">Payment Methods</h2>
            <div className="space-y-4">
                {paymentMethods.map((method) => (
                    <div
                        key={method.id}
                        className="flex items-center justify-between p-4 bg-primaryLight rounded-lg"
                    >
                        <div className="flex items-center gap-4">
                            <CreditCard className="text-white" size={24} />
                            <div>
                                <p className="text-white">{method.type} •••• {method.last4}</p>
                                <p className="text-sm text-gray-300">Expires {method.expiry}</p>
                            </div>
                        </div>
                        <button className="text-gray-400 hover:text-white transition-colors">
                            Edit
                        </button>
                    </div>
                ))}
                <button className="flex items-center gap-2 w-full p-4 border border-dashed border-primaryLight rounded-lg hover:bg-primaryLight text-gray-200 hover:text-white  transition-colors">
                    <Plus size={20} />
                    <span>Add New Payment Method</span>
                </button>
            </div>
        </div>
    )
}

