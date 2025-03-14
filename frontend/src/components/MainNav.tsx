import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { UserRound } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";

const MainNav = () => {
    const { loginWithRedirect } = useAuth0()
    return (
        <nav id="main_navigation" className="flex items-center gap-3">
            <Button
                variant="outline"
                className="max-w-9 md:max-w-fit"
                onClick={async () => await loginWithRedirect()}>
                    <Link to="/login">
                    <UserRound className="md:hidden" />
                    <span className="hidden md:block">Log in</span></Link></Button>
            <Button><Link to="/sign-up">Sign up</Link></Button>
        </nav>
    )
}

export default MainNav;