import { Rss } from "lucide-react"
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
const Navbar = () => {
    return (
        <nav className="bg-white sticky top-3 z-[50] text-black flex justify-between items-center rounded-full px-6 w-10/12 md:w-4/5 mx-auto py-4 my-6">
            <div className="flex">
                <Link href={"/"} className="flex gap-2 mx-5 items-center"><span><Rss className="text-3xl" /></span><span className="text-md md:text-xl">Follow-tree</span></Link>
                <div className="md:flex gap-2 hidden">
                    <Button variant="ghost">Themes</Button>
                    <Button variant="ghost">Discover</Button>
                    <Button variant="ghost">Marketplace</Button>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <Button>Login</Button>
                <Button variant={"secondary"}>Signup</Button>
                <div className="md:hidden flex"><Menu/></div>
            </div>
        </nav>
    )
}

export default Navbar