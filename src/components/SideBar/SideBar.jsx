'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const categories = [
    { name: 'Facial Cleanser', href: '#' },
    { name: 'Pomade', href: '#' },
    { name: 'Bath items', href: '#' },
    { name: 'Baby Powder', href: '#' },
    { name: 'Eye Liner', href: '#' },
    { name: 'Lip Glosses', href: '#' },
]

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="w-full md:w-64">
            <div className="md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow"
                >
                    <span className="font-medium">Categories</span>
                    <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
                <h2 className="text-lg font-semibold mb-4 hidden md:block">Categories</h2>
                <ul className="space-y-2">
                    {categories.map((category) => (
                        <li key={category.name}>
                            <a
                                href={category.href}
                                className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg"
                            >
                                {category.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

