
// Components
import HeaderClient from './HeaderClient'


const categories = ['All Categories', 'Electronics', 'Clothing', 'Books']


export default function Header() {

    return (
        <header className="bg-primary text-white">
            <HeaderClient categories={categories} />
        </header>
    )
}

