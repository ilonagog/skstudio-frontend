"use client";

import Link from "next/link";
import {Button} from "@/components/ui/button";

import {NavigationMenu, NavigationMenuItem,} from "@/components/ui/navigation-menu";
export default function Navbar() {
    const user = {admin: true };

    return (
        <nav className="flex items-center justify-between p-4 border-b">
            <Link href="/" className="front-bold text-x1">
                Home Page
            </Link>
            <div className="flex gap-6">
                <Link href="/products">Products</Link>
                <Link href="/cart">Cart</Link>
                {user?.admin &&(
                    <Link href="/admin">Admin</Link>
                )}
            </div>
            <div className="flex gap-2">
                <Button variant="outline">Login</Button>
            </div>

        </nav>
    )
    
    
}

