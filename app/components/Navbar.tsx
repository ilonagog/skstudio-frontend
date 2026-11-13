"use client";
import { useState, useContext, Suspense } from "react";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Search, ShoppingBag} from "lucide-react";
import {useRouter} from "next/navigation";
import { UserContext } from "../context/UserContext";
import { playfair } from "../fonts";
import {useCart} from "../context/CartContext";
import CartItem from "./CartItem";


import {
    NavigationMenu, 
    NavigationMenuContent, 
    NavigationMenuItem, 
    NavigationMenuList, 
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import SearchBar from "./SearchBar";
const productList =[
    {title: "Christmas Toys", href: "/products/toys"},
    {title: "Painting", href: "/products/painting"},
];
export default function Navbar() {

    const {cart, totalItems, removeFromCart} = useCart();
    const [isOpen, setIsOpen] = useState(false)
    
    const context = useContext(UserContext);
    const router = useRouter();
    if(!context) {
        throw new Error("Navbar must be used inside UserProvider");
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
        <nav className="flex items-center justify-between p-3 bg-[#B7D88D] border-b">
            <Link href="/" className={`${playfair.className} text-2xl font-medium tracking-wide`}>
                SofiKa
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
                                {productList.map((product) =>(
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
            <Suspense fallback={null}>

                <SearchBar/>
            </Suspense>
            <div className="relative"
                onMouseEnter={()=> setIsOpen(true)}
                // onMouseLeave={()=> setIsOpen(false)}
            >
                <Button variant="ghost" size="icon" aria-label="Go to shopping cart" onClick={()=> router.push("/cart")}>
                    <ShoppingBag className="h-5 w-5"/>
                    {totalItems > 0 && (
                        <span className="absolute -right-1 -top-1 rounded-full bg-white px-1.5 text-xs">
                            {totalItems}
                        </span>
                    )}
                </Button>
                {isOpen && <CartItem onClose={() => setIsOpen(false)} />}
            </div>
            {!loading && (
                <>
                {!loggedIn ? (
                    <Button onClick={()=> router.push("/login")}>Login</Button>

                ) : user?.admin === true ? (
                    <Button variant="outline" onClick={logoutUser}>Logout</Button>
                ) : (
                    <>
                        <Button variant="outline" onClick={()=> router.push("/account")}>My Account</Button>
                        <Button variant="outline" onClick={logoutUser}>Logout</Button>
                    </>
                )}
            </>
            )}
        </div>
        </nav>
    ) 
    
}
