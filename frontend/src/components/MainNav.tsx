import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const MainNav = () => {
    return (
        <nav id="main_navigation">
            <Button variant="ghost"><Link to="/login">Sign in</Link></Button>
        </nav>
    )
}

export default MainNav;