'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Wallet, Gift, Package, User, MapPin, CreditCard, Bell, HelpCircle, LogOut, Menu, X, SquarePen } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'



// store
import { setImage } from "@/features/auth/authSlice"


// assets
import profile from "@/assets/images/profile.svg"
import { updateUserProfile } from '../auth/authThunk'

const navigationItems = [
    { icon: Wallet, label: 'My wallet', href: '/account/wallet' },
    { icon: Gift, label: 'My rewards', href: '/account/rewards' },
    { icon: Package, label: 'Orders', href: '/account/orders' },
    { icon: User, label: 'Personal Information', href: '/account/personal-info' },
    { icon: MapPin, label: 'Location', href: '/account/location' },
    { icon: CreditCard, label: 'Payment Method', href: '/account/payment-method' },
    { icon: Bell, label: 'Contact Preferences', href: '/account/contact-preferences' },
    { icon: HelpCircle, label: 'Need Help', href: '/account/help' },
    { icon: LogOut, label: 'Sign Out', href: '/signout' }
]



export default function ProfileSidebar({ userImage, name, balance, lastName }) {
    const dispatch = useDispatch()
    const { image } = useSelector((state) => state.auth)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()
    const firstLetter = name?.charAt(0).toUpperCase() || '?'
    const lastLetter = lastName?.charAt(0).toUpperCase() || '?'


    const handleImageChange = (event) => {
        const file = event.target.files[0]
        console.log("File", file);

        if (file) {
            const fileReader = new FileReader()
            fileReader.onload = () => {
                dispatch(
                    setImage({
                        file,
                        preview: fileReader.result,
                    })
                )
            }
            console.log(fileReader);

            fileReader.readAsDataURL(file)

        }
    }

    return (
        <>
            <button
                className="fixed top-4 left-4 z-50 md:hidden bg-primaryMedium text-white p-2 rounded-full"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? <X /> : <Menu />}
            </button>

            <div className={`
         top-0 left-0 h-full w-64 text-white transition-transform duration-300 ease-in-out z-40
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
                <div className="p-6 text-center border-b border-teal-500 bg-subPrimary">
                    <div className="relative w-24 h-24 mx-auto mb-4">
                        {userImage ? (
                            <div className="text-4xl flex items-center justify-center w-24 h-24  rounded-full relative group">
                                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <img
                                    src={image?.preview || userImage}
                                    alt="Profile picture"
                                    className="rounded-full object-cover w-24 h-24"
                                />
                                <label htmlFor='file-upload' className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer'>
                                    <SquarePen />
                                </label>

                                <input
                                    id="file-upload"
                                    type="file"
                                    accept="image/*"
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    onChange={handleImageChange}
                                />
                            </div>
                        ) : (

                            <div className="text-4xl flex items-center justify-center w-24 h-24 font-bold bg-primaryExtraLight rounded-full relative group">
                                {firstLetter}
                                {lastLetter}
                                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <label htmlFor='file-upload' className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer'>
                                    <SquarePen />
                                </label>

                                <input
                                    id="file-upload"
                                    type="file"
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        if (file) {
                                            console.log("Selected file:", file);
                                        }
                                    }}
                                />
                            </div>

                        )}

                    </div>
                    <h2 className="text-xl font-semibold mb-2">{name}</h2>
                    <div className="rounded-lg border-[1px] border-[#dadada] p-1 px-8 inline-block">
                        <p className="text-sm text-teal-100">Balance</p>
                        <p className="text-xl font-bold">${balance}</p>
                    </div>
                </div>

                <nav className="p-4 border-x-[1px] border-[#dadada] bg-white ">
                    <ul className="space-y-2">
                        {navigationItems.map((item) => {
                            const Icon = item.icon
                            const isActive = pathname === item.href;
                            return (
                                <li key={item.label}>
                                    <Link
                                        href={item.href}
                                        className={`
                                            flex items-center gap-3 px-4 py-2 rounded-lg text-secondary transition-colors
                                            ${isActive
                                                ? 'text-white bg-subPrimary'
                                                : 'hover:bg-subPrimary hover:text-white'
                                            }
                                        `}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <Icon size={20} />
                                        <span>{item.label}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>

            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0  md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}
        </>
    )
}

