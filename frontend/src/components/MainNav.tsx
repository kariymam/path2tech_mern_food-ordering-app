import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { UserRound } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import UsernameMenu from "./UsernameMenu";

const MainNav = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0()
    return (
        <nav id="main_navigation" className="flex">
            {isAuthenticated
                ?
                (<UsernameMenu />)
                :
                (<div className="flex grow-1 items-center gap-3">
                    <Button
                        variant="outline"
                        className="max-w-9 md:max-w-fit"
                        onClick={async () => await loginWithRedirect()}>
                            <UserRound className="md:hidden" />
                            <span className="hidden md:block">Log in</span></Button>
                    <Button><Link to="/sign-up">Sign up</Link></Button>
                </div>
                )}
        </nav>
    )
}

export default MainNav;