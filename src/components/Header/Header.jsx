
// Components
import HeaderClient from './HeaderClient'


// service
import { getAllCategories } from '@/services/product.service'

export default async function Header() {
    let categories
    try {
        const response = await getAllCategories()
        console.log(response);

        categories = response
    } catch (error) {
        console.error('Error fetching categories:', error)
        categories = []
        return new Error(error.message)

    }

    return (
        <header className="bg-primary text-white">
            <HeaderClient categories={categories} />
        </header>
    )
}
