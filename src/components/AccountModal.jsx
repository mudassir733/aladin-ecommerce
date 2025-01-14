'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { X } from 'lucide-react'

export default function AccountModal({ isOpen, onClose }) {
    const router = useRouter()
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true)
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300)
            return () => clearTimeout(timer)
        }
    }, [isOpen])

    if (!isVisible) return null

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
            <div className={`bg-white rounded-lg shadow-xl w-full max-w-md p-6 ${isOpen ? 'scale-100' : 'scale-95'} transition-transform duration-300`}>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-900">Account Required</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <p className="text-gray-600 mb-6">
                    You need an account to access this page. Would you like to sign up or log in?
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        onClick={() => router.push('/signup')}
                        className="w-full sm:w-1/2 bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition-colors duration-300"
                    >
                        Sign Up
                    </button>
                    <button
                        onClick={() => router.push('/login')}
                        className="w-full sm:w-1/2 border border-teal-600 text-teal-600 py-2 px-4 rounded-md hover:bg-teal-50 transition-colors duration-300"
                    >
                        Log In
                    </button>
                </div>
            </div>
        </div>
    )
}

