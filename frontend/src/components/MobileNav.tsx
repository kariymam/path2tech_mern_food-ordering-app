import { CircleUserRound, MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
    const { isAuthenticated, loginWithRedirect, user } = useAuth0()
    return (
        <Sheet>
            <SheetTrigger><MenuIcon /></SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>
                        {isAuthenticated ? (
                            <span className="flex items-center gap-2">
                            <CircleUserRound className="text-orange-500"/>
                            {user?.email}</span>) : (
                            <span>Welcome to MernEats.com</span>)}
                    </SheetTitle>
                    <hr></hr>
                    <SheetDescription className="flex flex-col gap-4 mt-4">
                    {isAuthenticated ? (
                            <MobileNavLinks/>
                            ) : (
                           <Button onClick={() => loginWithRedirect()} className="flex-1 bg-orange-500">Log In</Button>)}
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav;