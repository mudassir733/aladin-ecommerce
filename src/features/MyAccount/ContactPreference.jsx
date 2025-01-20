'use client'

import { useState } from 'react'
import { Bell, Mail, Phone, MessageSquare } from 'lucide-react'
import ToggleSwitch from './ToggleSwitch'

export default function ContactPreference() {
    const [preferences, setPreferences] = useState({
        emailNotifications: true,
        smsNotifications: false,
        pushNotifications: true,
        marketingEmails: false,
        orderUpdates: true,
        newsletterSubscription: true,
        productRecommendations: false,
    })

    const handleToggle = (key) => {
        setPreferences(prev => ({ ...prev, [key]: !prev[key] }))
    }

    return (
        <div className="w-full !p-6 mx-auto">
            <h1 className="text-2xl font-semibold text-primaryMedium mb-8">Contact Preferences</h1>

            <div className="bg-primaryMedium rounded-lg p-6">
                <h2 className="text-xl font-semibold text-white mb-6">Notification Settings</h2>

                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Mail className="text-teal-200 mr-3" size={24} />
                            <span className="text-white">Email Notifications</span>
                        </div>
                        <ToggleSwitch
                            enabled={preferences.emailNotifications}
                            onChange={() => handleToggle('emailNotifications')}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Phone className="text-teal-200 mr-3" size={24} />
                            <span className="text-white">SMS Notifications</span>
                        </div>
                        <ToggleSwitch
                            enabled={preferences.smsNotifications}
                            onChange={() => handleToggle('smsNotifications')}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Bell className="text-teal-200 mr-3" size={24} />
                            <span className="text-white">Push Notifications</span>
                        </div>
                        <ToggleSwitch
                            enabled={preferences.pushNotifications}
                            onChange={() => handleToggle('pushNotifications')}
                        />
                    </div>
                </div>

                <h2 className="text-xl font-semibold text-white mt-10 mb-6">Email Preferences</h2>

                <div className="space-y-4">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={preferences.marketingEmails}
                            onChange={() => handleToggle('marketingEmails')}
                            className="form-checkbox h-5 w-5 text-teal-600 rounded focus:ring-teal-700 border-gray-600 bg-primaryMedium"
                        />
                        <span className="ml-3 text-white">Marketing Emails</span>
                    </label>

                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={preferences.orderUpdates}
                            onChange={() => handleToggle('orderUpdates')}
                            className="form-checkbox h-5 w-5 text-teal-600 rounded focus:ring-teal-500 border-gray-600 bg-gray-700"
                        />
                        <span className="ml-3 text-white">Order Updates</span>
                    </label>

                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={preferences.newsletterSubscription}
                            onChange={() => handleToggle('newsletterSubscription')}
                            className="form-checkbox h-5 w-5 text-teal-600 rounded focus:ring-teal-500 border-gray-600 bg-gray-700"
                        />
                        <span className="ml-3 text-white">Newsletter Subscription</span>
                    </label>

                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={preferences.productRecommendations}
                            onChange={() => handleToggle('productRecommendations')}
                            className="form-checkbox h-5 w-5 text-teal-600 rounded focus:ring-teal-500 border-gray-600 bg-gray-700"
                        />
                        <span className="ml-3 text-white">Product Recommendations</span>
                    </label>
                </div>

                <div className="mt-10">
                    <h2 className="text-xl font-semibold text-white mb-4">Communication Channels</h2>
                    <p className="text-gray-200 mb-4">Select your preferred method of communication:</p>
                    <select
                        className="w-full bg-primaryLight outline-none border border-none text-white rounded-md py-2 px-3  focus:ring-2 focus:ring-none"
                    >
                        <option value="email">Email</option>
                        <option value="sms">SMS</option>
                        <option value="push">Push Notification</option>
                        <option value="inApp">In-App Message</option>
                    </select>
                </div>

                <div className="mt-10 flex justify-end">
                    <button className="px-6 py-2 bg-primaryLight text-white rounded-md hover:bg-primaryExtraLight transition-colors">
                        Save Preferences
                    </button>
                </div>
            </div>
        </div>
    )
}

