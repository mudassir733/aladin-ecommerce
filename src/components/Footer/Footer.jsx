'use client'

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

const footerLinks = {
    company: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms & Conditions', href: '/terms' }
    ],
    categories: [
        { name: 'Beauty & Personal Care', href: '/category/beauty' },
        { name: 'Health & Household', href: '/category/health' },
        { name: 'Home & Kitchen', href: '/category/home' },
        { name: 'Medical Instruments', href: '/category/medical' }
    ],
    support: [
        { name: 'Help Center', href: '/help' },
        { name: 'Track Order', href: '/track' },
        { name: 'Return Policy', href: '/returns' },
        { name: 'Shipping Info', href: '/shipping' }
    ],
    social: [
        { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
        { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
        { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
        { name: 'Youtube', icon: Youtube, href: 'https://youtube.com' }
    ]
}

export default function Footer() {
    return (
        <footer className="bg-primary border-t md:pl-[60px] md:pr-[60px]">
            <div className="mx-auto max-w-7xl px-4 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div>
                        <h3 className="text-[20px] text-primaryExtraLight font-semibold mb-4">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white hover:text-primaryLight transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[20px] text-primaryExtraLight font-semibold mb-4">Categories</h3>
                        <ul className="space-y-3">
                            {footerLinks.categories.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white hover:text-primaryLight transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-[20px] text-primaryExtraLight font-semibold mb-4">Support</h3>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white hover:text-primaryLight transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[20px] text-primaryExtraLight font-semibold mb-4">Stay Connected</h3>
                        <div className="mb-6">
                            <p className="text-white mb-2">Subscribe to our newsletter</p>
                            <form className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                                />
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-primaryMedium text-white rounded-md hover:bg-primaryLight transition-colors"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                        <div>
                            <p className="text-white mb-2">Follow us on social media</p>
                            <div className="flex space-x-4">
                                {footerLinks.social.map((social) => {
                                    const Icon = social.icon
                                    return (
                                        <Link
                                            key={social.name}
                                            href={social.href}
                                            className="text-[#f1f1f1] transition-colors"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Icon size={24} />
                                            <span className="sr-only">{social.name}</span>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mt-10 pt-8 border-t">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-primaryExtraLight text-sm">
                            © {new Date().getFullYear()} Aladdin. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link
                                href="/privacy"
                                className="text-primaryExtraLight hover:text-primaryLight text-sm"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms"
                                className="text-primaryExtraLight hover:text-primaryLight text-sm"
                            >
                                Terms of Service
                            </Link>
                            <Link
                                href="/cookies"
                                className="text-primaryExtraLight hover:text-primaryLight text-sm"
                            >
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

