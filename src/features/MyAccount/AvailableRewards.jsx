const rewards = [
    { id: 1, name: '$5 off your next purchase', points: 500 },
    { id: 2, name: 'Free shipping on your next order', points: 750 },
    { id: 3, name: '10% discount on any item', points: 1000 },
    { id: 4, name: 'Exclusive early access to new products', points: 1500 },
]

export default function AvailableRewards() {
    return (
        <div className="space-y-4">
            {rewards.map((reward) => (
                <div key={reward.id} className="flex justify-between items-center p-4 bg-primaryLight rounded-lg">
                    <div>
                        <h3 className="text-white font-medium">{reward.name}</h3>
                        <p className="text-sm text-gray-300">{reward.points} points</p>
                    </div>
                    <button className="bg-primaryMedium text-white py-2 px-4 rounded-lg hover:bg-primaryExtraLight transition-colors">
                        Redeem
                    </button>
                </div>
            ))}
        </div>
    )
}

