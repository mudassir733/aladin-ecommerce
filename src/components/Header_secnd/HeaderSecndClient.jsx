"use client"
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, ShoppingCart, MapPin, ChevronDown, Globe, Menu } from 'lucide-react'


// Components
import MobileNav from './MobileNav'



// assets
import Logo from "@/assets/images/Logo.svg"
const navigationLinks = [
    { name: 'Customer Service', href: '/customer-service' },
    { name: 'Aladdin Basics', href: '/basics' },
    { name: 'Best Sellers', href: '/best-sellers' },
    { name: "Today's Deals", href: '/deals' },
    { name: 'Fashion', href: '/fashion' },
    { name: 'New Releases', href: '/new' },
    { name: 'Aladdin Pharmacy', href: '/pharmacy' },
    { name: 'Aladdin Home', href: '/home' },
]


const HeaderSecndClient = ({ categories }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [category, setCategory] = useState('All Categories')
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef(null)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)


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
        <header className="w-full ">

            <div className="bg-[#005b6f] text-white md:px-0 px-[10px]">
                <div className="container mx-auto px-4 py-3">
                    <div className="flex items-center justify-between gap-4">


                        <Link href="/">
                            <Image src={Logo} alt='Logo' height={35} className="text-2xl font-bold" />
                        </Link>

                        <button className="hidden md:flex items-center gap-1 text-sm hover:text-teal-200">
                            <MapPin size={20} />
                            <div className="flex flex-col items-start">
                                <span className="text-xs opacity-80">Deliver to</span>
                                <span className="font-medium">Pakistan</span>
                            </div>
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

                        <button className="hidden md:flex items-center gap-1 hover:text-teal-200">
                            <Globe size={20} />
                            <span>EN</span>
                            <ChevronDown size={16} />
                        </button>


                        <div className="hidden md:flex flex-col items-start">
                            <span className="text-sm">Hello, Kiran</span>
                            <span className="text-sm font-medium">Account for Eshopify...</span>
                        </div>
                        <div className='flex items-center justify-between gap-4'>

                            <button
                                className="md:hidden"
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                                aria-label="Toggle search"
                            >
                                <Search size={24} />
                            </button>
                            <button
                                className="md:hidden"
                                onClick={() => setIsMobileMenuOpen(true)}
                                aria-label="Open menu"
                            >
                                <Menu size={24} />
                            </button>

                            <Link href="/cart" className="flex items-center hover:text-primaryExtraLight transition-colors duration-200">
                                <ShoppingCart size={24} />
                                <span className="ml-2 hidden md:inline">Cart</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="hidden md:block bg-[#80deea] text-gray-900">
                <div className="container mx-auto md:px-[30px]">
                    <div className="flex items-center justify-between">
                        <ul className="flex items-center space-x-6">
                            {navigationLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="inline-block py-2 hover:text-gray-700 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/black-history-month"
                            className="py-2 font-medium text-sm hover:text-gray-700"
                        >
                            Black History Month
                        </Link>
                    </div>
                </div>
            </nav>
            <MobileNav
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                navigationLinks={navigationLinks}
            />
        </header>
    )
}

export default HeaderSecndClient