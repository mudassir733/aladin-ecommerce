'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import ProfileSidebar from './ProfileSideBar'

export default function ProfileSection() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        birthdate: '',
        gender: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission
    }

    return (
        <>
            <div className='grid grid-cols-12'>
                <form onSubmit={handleSubmit} className="col-start-1 md:col-end-8 col-end-12">
                    <h1 className="text-2xl font-semibold text-primaryMedium mb-8">
                        Personal Information
                    </h1>

                    <div className="space-y-6">


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                    className="w-full px-4 py-2 border border-primaryMedium rounded-lg text-gray-500 focus:outline-none focus:border-teal-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    className="w-full px-4 py-2 border border-primaryMedium rounded-lg text-gray-500 focus:outline-none focus:border-teal-500"
                                />
                            </div>
                        </div>


                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-2  border border-primaryMedium rounded-lg text-gray-500 focus:outline-none focus:border-teal-500"
                            />
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    className="w-full px-4 py-2 border border-primaryMedium rounded-lg text-gray-500 focus:outline-none focus:border-teal-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">
                                    Birth Date
                                </label>
                                <input
                                    type="text"
                                    placeholder="DD/MM/YY"
                                    value={formData.birthdate}
                                    onChange={(e) => setFormData({ ...formData, birthdate: e.target.value })}
                                    className="w-full px-4 py-2  border border-primaryMedium rounded-lg text-gray-500 focus:outline-none focus:border-teal-500"
                                />
                            </div>
                        </div>


                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                                Gender
                            </label>
                            <div className="flex gap-4">
                                <button
                                    type="button"
                                    onClick={() => setFormData({ ...formData, gender: 'male' })}
                                    className={`
                flex-1 px-4 py-2 rounded-lg border transition-colors
                ${formData.gender === 'male'
                                            ? 'bg-primaryMedium border-primaryMedium text-white'
                                            : 'border-primaryMedium hover:text-white text-gray-400 hover:bg-primaryMedium'
                                        }
              `}
                                >
                                    Male
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setFormData({ ...formData, gender: 'female' })}
                                    className={`
                flex-1 px-4 py-2 rounded-lg border transition-colors
                ${formData.gender === 'female'
                                            ? 'bg-primaryMedium border-primaryMedium text-white'
                                            : 'border-primaryMedium text-gray-400 hover:bg-primaryMedium hover:text-white'
                                        }
              `}
                                >
                                    Female
                                </button>
                            </div>
                        </div>

                        <p className="text-sm text-gray-500">
                            In order to access some features of the Service, you will have fill out
                            your account details.
                        </p>


                        <div className="flex gap-4">
                            <button
                                type="button"
                                className="px-10 py-2 border border-teal-500 text-teal-500 rounded-sm hover:bg-primaryMedium hover:text-white transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-10 py-2 bg-primaryMedium text-white rounded-sm hover:bg-primaryLight transition-colors"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

