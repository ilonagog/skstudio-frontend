"use client";

import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Search, ShoppingBag} from "lucide-react";
import {useRouter} from "next/navigation";



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
    const user = {admin: true };
    const router = useRouter();
    // const [openProduct, setOpenProduct] = useState(false)

    // const onClick = ()=>{
    //     setOpenProduct(true);
    // }
    return (
        <nav className="flex items-center justify-between p-3 border-b">
            <Link href="/" className="font-bold text-x1">
                MyStore
            </Link>
            <NavigationMenu>
                <NavigationMenuList>
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
                {user?.admin &&(
                    <NavigationMenuItem>
                        <Link href="/admin">Admin</Link> 
                    </NavigationMenuItem>
                )}
            </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-4">
            <Search className="w-5 h-5 cursor-pointer"/>
            <ShoppingBag className="w-5 h-5 cursor-pointer"/>
            <Button variant="outline">Login</Button>
        </div>
  
            {/* <div className="flex gap-6">
                <Link href="/products">Products</Link>
                <Link href="/cart">Cart</Link>
                {user?.admin &&(
                    <Link href="/admin">Admin</Link>
                )}
            </div>
            <div className="flex gap-2">
                <Button variant="outline">Login</Button>
            </div>
            <div>
                <Search className="w-5 h-5" /> 
            </div> */}
        </nav>
    ) 
    
}
