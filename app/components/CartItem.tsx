import { useState } from "react";
import Navbar from "./Navbar";
import { useCart } from "../context/CartContext";

export default function CartItem({onClose}: {onClose: () => void}){
    const {cart, removeFromCart} = useCart();
    return (
        <div className="absolute right-0 top-12 z-50 w-80 rounded-lg border bg-white p-4 shadow-lg">
            <div className="mb-3 flex justify-between">
                <h2 className="font-semibold-between">Your Cart</h2>
                <button onClick={onClose}>Close</button>
            </div>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cart.map((item) => (
                    <div>
                        <div>
                            <p>{item.name}</p>
                            <p>${item.price.toFixed(2)} * {item.quantity}</p>
                        </div>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                ))
            )}
        </div>
    );
}
