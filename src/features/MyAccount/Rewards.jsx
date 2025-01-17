'use client'

import { useState } from 'react'
import { Gift, Star, Clock } from 'lucide-react'
import RewardsTier from './RewardsTier'
import AvailableRewards from './AvailableRewards'
import PointsHistory from './PointsHistory'

export default function Rewards() {
    const [activeTab, setActiveTab] = useState('available')

    return (
        <div className="w-full mx-auto p-6">
            <h1 className="text-2xl font-semibold text-primaryMedium mb-8">My Rewards</h1>

            <RewardsTier points={1250} tier="Gold" />

            <div className="mt-8 bg-primaryMedium rounded-lg overflow-hidden">
                <div className="flex border-b border-gray-700">
                    <button
                        className={`flex-1 py-4 px-6 text-sm font-medium ${activeTab === 'available'
                            ? 'bg-primaryLight text-white'
                            : 'text-gray-300 hover:text-white'
                            }`}
                        onClick={() => setActiveTab('available')}
                    >
                        <Gift className="inline-block mr-2" size={18} />
                        Available Rewards
                    </button>
                    <button
                        className={`flex-1 py-4 px-6 text-sm font-medium ${activeTab === 'history'
                            ? 'bg-primaryLight text-white'
                            : 'text-gray-300 hover:text-white'
                            }`}
                        onClick={() => setActiveTab('history')}
                    >
                        <Clock className="inline-block mr-2" size={18} />
                        Points History
                    </button>
                </div>
                <div className="p-6">
                    {activeTab === 'available' ? <AvailableRewards /> : <PointsHistory />}
                </div>
            </div>
        </div>
    )
}

