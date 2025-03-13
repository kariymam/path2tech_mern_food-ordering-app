import { Link } from "react-router-dom"
import MainNav from "./MainNav";
const Header = () => {
    return (
        <header id="main_header" className="sticky top-0 border-b-2 border-b-orange-500 py-3 md:py-6">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="md:text-3xl font-bold tracking-tight text-orange-500">MernEats.com</Link>
                <MainNav />
            </div>
        </header>
    )
}

export default Header;