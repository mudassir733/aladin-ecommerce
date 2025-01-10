'use client'

import Image from 'next/image'
import Link from 'next/link'

const brands = [
    {
        name: 'Nike',
        logo: '/logo1.svg',
        href: '/brands/nike'
    },
    {
        name: 'Puma',
        logo: '/logo2.svg',
        href: '/brands/puma'
    },
    {
        name: 'Favorite Brands',
        logo: '/logo3.svg',
        href: '/brands/favorites'
    },
    {
        name: 'Colgate',
        logo: '/logo4.svg',
        href: '/brands/colgate'
    },
    {
        name: 'Zara',
        logo: '/logo5.svg',
        href: '/brands/zara'
    },
    {
        name: 'Louis Vuitton',
        logo: '/logo6.svg',
        href: '/brands/louis-vuitton'
    },
    {
        name: 'CeraVe',
        logo: '/logo7.svg',
        href: '/brands/cerave'
    }
]

export default function Brands() {
    return (
        <section className="py-8 md:pl-[55px] md:pr-[55px] mx-auto max-w-7xl">
            <h2 className="heading-1 text-center md:text-left w-full md:w-[450px] mb-6">popular brands</h2>

            <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12">
                {brands.map((brand) => (
                    <Link
                        key={brand.name}
                        href={brand.href}
                        className="group relative flex items-center justify-center"
                    >
                        <div className="relative h-8 w-20">
                            <Image
                                src={brand.logo}
                                alt={brand.name}
                                fill
                                className="object-contain filter grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

