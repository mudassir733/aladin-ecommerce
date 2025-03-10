'use client'

import { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'


// assets
import categoryImage from "@/assets/images/category.svg"

// service
import { getAllCategories } from '@/services/product.service'

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const params = useParams();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getAllCategories();
                setCategories(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
                return new Error(error.message);
            }
        };
        fetchCategories();
    }, []);

    return (
        <div className="w-full md:w-64 md:border-r-[1px] md:border-[#dadada] py-2">
            <div className="md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between p-4 bg-white rounded-lg shadow"
                >

                    <span className="heading-3">Categories</span>
                    <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
                <div className='hidden md:flex items-center gap-2 mb-4'>

                    <Image src={categoryImage} alt='Category' />

                    <h2 className="text-lg font-semibold hidden md:block"> Categories</h2>
                </div>
                <ul className="space-y-2">
                    {categories.map((category) => (
                        <li key={category.name}>
                            <Link href={`/products/category/${category.name}`}
                                className={`block px-4 py-2 text-neutralMedium font-bold text-3 rounded-lg capitalize hover:text-primary transition-all duration-200 ${params.slug === category.name ? " text-primary " : ""} `}>
                                {category.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

