'use client'

import Link from 'next/link'
import { X } from 'lucide-react'

export default function MobileNav({ isOpen, onClose, navigationLinks }) {
    return (
        <>

            <div
                className={`fixed inset-y-0 left-0 z-50 w-[280px] bg-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">

                    <div className="flex items-center justify-between p-4 border-b">
                        <span className="text-xl font-bold">Menu</span>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-100 rounded-full"
                            aria-label="Close menu"
                        >
                            <X size={24} />
                        </button>
                    </div>
                    <div className="p-4 bg-gray-50">
                        <div className="flex flex-col">
                            <span className="text-sm">Hello, Kiran</span>
                            <span className="text-sm font-medium">Account for Eshopify...</span>
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        <nav className="p-4">
                            <ul className="space-y-2">
                                {navigationLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="block py-2 px-4 hover:bg-gray-50 rounded-lg"
                                            onClick={onClose}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="p-4 border-t">
                        <div className="space-y-2">
                            <button className="w-full py-2 px-4 text-left hover:bg-gray-50 rounded-lg">
                                Change Language
                            </button>
                            <button className="w-full py-2 px-4 text-left hover:bg-gray-50 rounded-lg">
                                Change Location
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={onClose}
                />
            )}
        </>
    )
}

