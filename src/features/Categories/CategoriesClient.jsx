"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const CategoriesClient = ({ categories }) => {
    return (
        <section className="mx-auto w-full md:mt-[17rem] mt-[30rem] md:pl-[88px] md:pr-[88px]">
            <div className="flex justify-between items-center mb-6 flex-wrap">
                <h2 className="heading-1 text-center md:text-left w-full md:w-[450px]">Explore popular category</h2>
                <Link
                    href="/products"
                    className="text-1 mt-5 md:mt-0 hover:text-primary transition-colors duration-200 flex items-center justify-center w-full md:w-[100px]"
                >
                    See all
                    <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </Link>
            </div>

            <div className="grid grid-cols-1 pl-[12px] pr-[12px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {categories.map((category) => (
                    <Link
                        key={category.id}
                        href={category.href}
                        className="group"
                    >
                        <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                            <Image
                                src={category.image}
                                alt={category.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <h3 className="mt-2 text-sm text-center text-gray-700 group-hover:text-gray-900">
                            {category.name}
                        </h3>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default CategoriesClient