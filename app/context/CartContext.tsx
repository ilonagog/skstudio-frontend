"use client";
import { createContext, useContext, useState } from "react";
const CartContext = createContext<CartContextType | undefined>(undefined);

type Product = {id: number; name: string;  price: number };
type CartItem =  Product & {quantity: number};
type CartContextType = {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (id: number) => void;
    totalItems: number;
};

export default function CartProvider({children}: {children: React.ReactNode}){
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: Product) =>{
        console.log("addToCart called", product)
        setCart((prevCart)=>{
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem){
                return prevCart.map((item) => item.id === product.id ? {...item, quantity: item.quantity +1} : item )
            }
            return [...prevCart, {...product, quantity: 1 }]
        });
    };
    const removeFromCart = (productId: number) => {
        setCart((prevCart) => prevCart.filter((item)=> item.id !== productId))
    }
    const totalItems = cart.reduce((sum, item) => sum +item.quantity, 0);
    console.log("in cart is ", cart)
    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, totalItems, totalPrice, updatedQuantity}}>
            {children}

        </CartContext.Provider>
    )
}

export function useCart(){
    const context = useContext(CartContext);
    if(!context){

        throw new Error("useCart must be used inside CartProvider");
    }
    return context;
}