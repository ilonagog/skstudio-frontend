"use client";
import {Button} from "@/components/ui/button";
import  {useCart} from "../context/CartContext";
import { useRouter } from "next/navigation";

import Link from "next/link";
export default function CartPage (){
    const {cart, removeFromCart, updatedQuantity, totalPrice} = useCart();
    const router = useRouter(); 
    // const subtotal = cart.reduce((sum, item)=> sum +item.price * item.quantity, 0)
    return (
        <main className="mx-auto max-w-5xl p-8">
            <h1 className="mb-8 text-3xl font-semibold">Your shopping cart:</h1>
            {cart.length === 0 ? (
                <div>
                    <p>Your cart is empty.</p>
                    <Link href="/products">Continue Shopping </Link>
                </div>
            ) : (
                <>
                    <div className="space-y-6">
                        {cart.map((item) => (
                            <div key={item.id} className="flex items-center justify-between border-b pb-6">
                                <div>
                                    <img src={item.image} alt={item.name} className="h-24 w-24 rounded-lg object-cover"/>
                                    <h2 className="font-medium">{item.name}</h2>
                                    <p>${item.price.toFixed(2)}</p>
                                    <div className="mt-3 flex items-center gap-3">
                                        <Button variant="outline" size="sm" onClick={()=>updatedQuantity(item.id, item.quantity -1)} disabled={item.quantity <=1}> - </Button>
                                        <span>{item.quantity}</span>
                                        <Button variant="outline" size="sm" onClick={()=> updatedQuantity(item.id, item.quantity + 1)}> + </Button>
                                        <Button variant="outline" size="sm" onClick={()=> removeFromCart(item.id)}>Remove</Button>
                                    </div>
                                </div>
                                <div>
                                    <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                        </div>
                        <div className="mt-8 border-t pt-6 text-right">
                            <p className="text-xl font-semibold">
                                Subtotal: ${totalPrice.toFixed(2)}
                            </p>
                            <Button className="mt-4" onClick={()=> router.push("/checkout") }>Proceed to checkout</Button>
                        
                    </div>
                </>
            )}
        </main>
    );
}