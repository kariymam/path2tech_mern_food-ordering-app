import { Link } from "react-router-dom"
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import { useAuth0 } from "@auth0/auth0-react";
const Header = () => {
    const { isAuthenticated } = useAuth0()
    return (
        <header id="main_header" className={`py-3 md:py-6 ${isAuthenticated ? "bg-white" : ''} `}>
            <div className="container mx-auto px-4 flex  items-center">
                <MobileNav/>
                <div className="justify-between mx-auto px-4 flex w-full">

                <Link to="/" className="md:text-3xl my-auto font-bold tracking-tight">MernEats.com</Link>
                <MainNav />
                </div>
            </div>
        </header>
    )
}

export default Header;