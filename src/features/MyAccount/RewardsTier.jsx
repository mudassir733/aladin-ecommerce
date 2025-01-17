import { Star } from 'lucide-react'

export default function RewardsTier({ points, tier }) {
    return (
        <div className="bg-primaryMedium rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h2 className="text-xl font-semibold text-white">Rewards Balance</h2>
                    <p className="text-gray-300">Current Tier: {tier}</p>
                </div>
                <div className="text-right">
                    <p className="text-3xl font-bold text-teal-300">{points}</p>
                    <p className="text-gray-300">points</p>
                </div>
            </div>
            <div className="w-full bg-primaryLight rounded-full h-2.5">
                <div className="bg-yellow-300 h-2.5 rounded-full" style={{ width: '70%' }}></div>
            </div>
            <p className="text-sm text-gray-300 mt-2">250 points until next tier</p>
        </div>
    )
}

