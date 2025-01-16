'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Wallet, Gift, Package, User, MapPin, CreditCard, Bell, HelpCircle, LogOut, Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'


// assets
import profile from "@/assets/images/profile.svg"

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



export default function ProfileSidebar({ activePage }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()




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
                        <Image
                            src={profile}
                            alt="Profile picture"
                            fill
                            className="rounded-full object-cover"
                        />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">Kiran</h2>
                    <div className="rounded-lg border-[1px] border-[#dadada] p-1 px-8 inline-block">
                        <p className="text-sm text-teal-100">Balance</p>
                        <p className="text-xl font-bold">$45.00</p>
                    </div>
                </div>

                <nav className="p-4 border-x-[1px] border-[#dadada]">
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

