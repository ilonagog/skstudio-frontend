"use client";
import { useContext } from "react";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Search, ShoppingBag} from "lucide-react";
import {useRouter} from "next/navigation";
import { UserContext } from "../context/UserContext";


import {
    NavigationMenu, 
    NavigationMenuContent, 
    NavigationMenuItem, 
    NavigationMenuList, 
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
const produstList =[
    {title: "Christams Toys", href: "/products/toys"},
    {title: "Painting", href: "/products/painting"},
];
export default function Navbar() {

    const context = useContext(UserContext);
    const router = useRouter();
    if(!context) {
        throw new Error("Navbar must be used inside UserProvide");
    }
    const {user, loggedIn, loading, logout} = context;

    async function  logoutUser () {
        try {
            const response = await fetch("/logout", {
            method: "DELETE"
        })
        if(!response.ok){
            throw new Error("Logout failed");
        }
            logout();
            router.push("/");
        } catch(error){
            console.error("Could not log out", error);
        }

    }
 

    return (
        <nav className="flex items-center justify-between p-3 border-b">
            <Link href="/" className="font-bold text-xl">
                MyStore
            </Link>
            <NavigationMenu>
                <NavigationMenuList>
                    {!loading && loggedIn && user?.admin === true ? (
                        <NavigationMenuItem>
                            <Button onClick={()=> router.push("/admin")}> My Dashboard</Button>
                </NavigationMenuItem>
            ) : (
                <NavigationMenuItem>
                    <NavigationMenuTrigger onClick={()=>router.push("/products")}>Products
                    </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="p-4 flex flex-col gap-2 w-48">
                                {produstList.map((product) =>(
                                    <li key={product.title}>
                                        <Link  href={product.href}>
                                            {product.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>                       
                    </NavigationMenuContent>
                </NavigationMenuItem>
            )}
             </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" aria-label="Search" onClick={() => router.push("/search")}>
                <Search className="h-5 w-5"/>
            </Button>
            <Button variant="ghost" size="icon" aria-label="Shopping bag" onClick={()=> router.push("/cart")}>
                <ShoppingBag className="h-5 w-5"/>
            </Button>
            {!loading && (
                <>
                {!loggedIn ? (
                    <Button onClick={()=> router.push("/login")}>Login</Button>

                ) : user?.admin === true ? (
                    <Button variant="outline" onClick={logoutUser}>Logout</Button>
                ) : (
                    <>
                        <Button variant="outline" onClick={()=> router.push("/account")}>My Account</Button>
                        <Button variant="outline"onClick={()=>router.push("/logout")}>Logout</Button>
                    </>
                )}
            </>
            )}
        </div>
        </nav>
    ) 
    
}
