import { Link } from "react-router-dom"
import MainNav from "./MainNav";
const Header = () => {
    return (
        <header id="main_header" className="py-3 md:py-6">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link to="/" className="md:text-3xl font-bold tracking-tight">MernEats.com</Link>
                <MainNav />
            </div>
        </header>
    )
}

export default Header;