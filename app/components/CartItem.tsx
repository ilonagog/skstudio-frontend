"use client";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import { useCart } from "../context/CartContext";

export default function CartItem({onClose}: {onClose: () => void}){
    const {cart, removeFromCart, totalItems, totalPrice} = useCart();

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    return (
        <div className="absolute right-0 top-12 z-50 w-80 rounded-lg border bg-white p-4 shadow-lg">
            {/* <div className="mb-3 flex justify-between"> */}
                <h2 className="mb-4 font-semibold">Shopping Cart ({totalItems})</h2>
                {/* <button onClick={onClose}>Close</button> */}
            {/* </div> */}
            {cart.length === 0 ? (
                <p className="py-4 text-sm text-gray-500">Your cart is empty</p>
            ) : (
                <>
                    <div className="max-h-64 space-y-4 overflow-y-auto">
                        {cart.map((item) => (
                            <div key={item.id} className="flex justify-between gap-3 border-b pb-3">
                                <div>
                                    <p className="font-medium">{item.name}</p>
                                    <p>Quantity: {item.quantity}</p>
                                </div>
                                <p>${(item.price * item.quantity).toFixed(2)}</p>
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </div>
                        ))}
                    </div>
                    <div>
                        <span>Subtotal</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                </>
            )}
            <Link href="/cart" onClick={onClose}> 
                <Button className="mt-4 w-full">View Cart & Ckeckout</Button>
            </Link>
        </div>
    );
}
