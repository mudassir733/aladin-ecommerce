"use client"
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Search, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'

// assets
import Logo from "@/assets/images/Logo.svg"

const HeaderClient = ({ categories }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [category, setCategory] = useState('All Categories')
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef(null)


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])



    return (
        <>
            <div className="container mx-auto px-4 py-3 ">
                <div className="flex items-center justify-between md:pl-[52px] md:pr-[52px]">

                    <Link href="/">
                        <Image src={Logo} alt='Logo' height={35} className="text-2xl font-bold" />
                    </Link>
                    <button
                        className="md:hidden justify-start ms-auto me-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>


                    <div className="hidden md:flex items-center flex-1 max-w-xl mx-4">
                        <input
                            type="text"
                            placeholder="Search Aladdin"
                            className="w-full px-4 py-2 text-gray-900 rounded-l-md focus:outline-none"
                        />
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="bg-white text-neutral px-4 w-[159px] py-2 h-[40px] focus:outline-none border-l flex items-center"
                                aria-haspopup="listbox"
                                aria-expanded={isDropdownOpen}
                            >
                                {category} <ChevronDown className="ml-2" size={16} />
                            </button>
                            {isDropdownOpen && (
                                <ul
                                    className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-md shadow-lg max-h-60 overflow-auto"
                                    role="listbox"
                                >
                                    {categories.map((cat, index) => (
                                        <li
                                            key={index}
                                            className={`px-4 py-1 cursor-pointer hover:text-white hover:bg-primaryMedium transition-all duration-200  ${cat === category ? 'bg-primaryMedium text-white' : 'text-secondary'
                                                }`}
                                            onClick={() => {
                                                setCategory(cat)
                                                setIsDropdownOpen(false)
                                            }}
                                            role="option"
                                            aria-selected={cat === category}
                                        >
                                            {cat}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <button className="bg-primaryMedium hover:bg-primaryLight transition-colors duration-200 h-[40px] px-4 py-2 rounded-r-md">
                            <Search size={20} />
                        </button>
                    </div>
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link href="/" className="hover:text-primaryExtraLight duration-200 transition-colors">Home</Link>
                        <Link href="/about" className="hover:text-primaryExtraLight duration-200 transition-colors">About Us</Link>
                        <Link href="/shop" className="hover:text-primaryExtraLight duration-200 transition-colors">Shop</Link>
                        <Link href="/contact" className="hover:text-primaryExtraLight duration-200 transition-colors">Contact Us</Link>
                        <Link href="/account/personal-info" className="hover:text-primaryExtraLight duration-200 transition-colors">My Account</Link>
                    </nav>

                    <Link href="/cart" className="flex items-center hover:text-primaryExtraLight transition-colors duration-200">
                        <ShoppingCart size={24} />
                        <span className="ml-2 hidden md:inline">Cart</span>
                    </Link>
                </div>
            </div>

            <div
                className={`fixed inset-y-0 left-0 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } w-64 bg-primary overflow-auto ease-in-out transition-all duration-300 z-30 md:hidden`}
            >
                <div className="p-4 ">
                    <button
                        className="absolute top-4 right-4"
                        onClick={() => setIsOpen(false)}
                    >
                        <X size={24} />
                    </button>
                    <nav className="mt-8 flex flex-col space-y-4">
                        <Link href="/" className="hover:text-primaryExtraLight duration-200 transition-colors">Home</Link>
                        <Link href="/about" className="hover:text-primaryExtraLight duration-200 transition-colors">About Us</Link>
                        <Link href="/shop" className="hover:text-primaryExtraLight duration-200 transition-colors">Shop</Link>
                        <Link href="/contact" className="hover:text-primaryExtraLight duration-200 transition-colors">Contact Us</Link>
                        <Link href="/account" className="hover:text-primaryExtraLight duration-200 transition-colors">My Account</Link>
                    </nav>
                    <div className="mt-8 h-12">
                        <input
                            type="text"
                            placeholder="Search Aladdin"
                            className="w-full px-4 py-2 text-gray-900 rounded-md focus:outline-none mb-2"
                        />
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full bg-white text-gray-900 rounded-md focus:outline-none mb-2"
                        >
                            <option>All Categories</option>
                            <option>Electronics</option>
                            <option>Clothing</option>
                            <option>Books</option>
                        </select>
                        <button className="bg-primaryMedium hover:bg-primaryLight transition-colors duration-200 h-[40px] w-full flex items-center justify-center px-4 py-2 rounded-r-md">
                            <Search size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </>
    )
}

export default HeaderClient