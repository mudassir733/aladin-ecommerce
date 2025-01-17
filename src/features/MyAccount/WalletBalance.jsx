export default function WalletBalance({ balance }) {
    return (
        <div className="bg-primary rounded-lg p-6 mb-8">
            <h2 className="text-lg text-white mb-2">Total Balance</h2>
            <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-white">$</span>
                <span className="text-4xl font-bold text-white">{balance}</span>
            </div>
            <div className="mt-6 flex gap-4">
                <button className="flex-1 bg-primaryMedium text-white py-2 px-4 rounded-lg hover:bg-primaryLight transition-colors">
                    Add Money
                </button>
                <button className="flex-1 border border-primaryLight hover:border-primaryExtraLight text-white py-2 px-4 rounded-lg hover:bg-primaryLight transition-colors">
                    Withdraw
                </button>
            </div>
        </div>
    )
}

