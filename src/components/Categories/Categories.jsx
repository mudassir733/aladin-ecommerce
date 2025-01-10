import CategoriesClient from "./CategoriesClient"


const categories = [
    {
        id: 1,
        name: 'Beauty & Personal Care',
        image: '/Category1.svg',
        href: '/category/beauty'
    },
    {
        id: 2,
        name: 'Health & Household',
        image: '/Category2.svg',
        href: '/category/health'
    },
    {
        id: 3,
        name: 'Home & Kitchen',
        image: '/Category3.svg',
        href: '/category/home'
    },
    {
        id: 4,
        name: 'Aladdin Pharmacy',
        image: '/Category4.svg',
        href: '/category/pharmacy'
    },
    {
        id: 5,
        name: 'Medical Instruments',
        image: '/Category5.svg',
        href: '/category/medical'
    }
]

export default function Categories() {
    return (
        <>
            <CategoriesClient categories={categories} />
        </>
    )
}

