"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {Heart, Star} from "lucide-react";
import { useState } from "react";
import {useCart} from "../context/CartContext"


type Product = {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    rating?: number;
    reviewCount?: number;
};
type ProductCardProps = {
    productItem: Product;
    isAdmin: boolean;
};


export default function ProductCard({productItem, isAdmin,}: ProductCardProps){
    const {addToCart} = useCart();
    const [isFavorite, setIsFavorite] = useState(false);
    const {name, price, description, image, rating, reviewCount} = productItem;
  
    return (
        <Card className="relative w-full overflow-hidden p-3">
            {!isAdmin && (
                <button
                    type="button"
                    onClick={()=> setIsFavorite(!isFavorite)}
                    aria-label={isFavorite ? " Remove from favorites" : "Add to favorites"}
                    className="absolute right-5 top-5 z-10 rounded-full bg-white/90 p-2"
                >
                    <Heart
                    className={`h-5 w-5 ${isFavorite ? "fill-rose-500 text-rose-500" : "text-gray-600"}`}/>
                </button>
            )}
            <img src={image} alt={name} className="aspect-[4/5] w-full rounded-lg object-cover"/>
            <div className="pt-3">
                <h2 className="font-medium">{name}</h2>
                <p className="mt-1 text-xs">${price.toFixed(2)}</p>
                {rating !== undefined && (
                    <div className="mt-2 flex items-center gap-2">
                        <div className="flex">
                            {[1,2,3,4,5].map((star) => {
                                const fillPercentage = Math.max(0, Math.min(100, (rating - star +1) * 100) );
                                return (
                                    <span key={star} className="relative inline-block">
                                        <Star className="h-4 w-4 text-gray-300"/>
                                        <span className="absolute left-0 top-0 overflow-hidden"
                                         style={{width: `${fillPercentage}%`}}>
                                            <Star className="h-4 w-4 fill-amber-400 text-amber-400"/>
                                        </span>
                                    </span>
                                );
                            })}
                        </div>
                        <span className="text-sx text-gray-500">{rating.toFixed(1)} ({reviewCount ?? 0})</span>
                    </div>
                )}

                <p className="mt-2 text-sm text-gray-500">{description}</p>
                {isAdmin ? (
                    <div className="mt-3 flex gap-2">
                        <Button>Edit</Button>
                        <Button>Delete</Button>
                    </div>
                ) : (
                    <Button className="mt-3 w-full" onClick={()=>{
                        console.log("button clicked", productItem); addToCart(productItem)}}>Add to the Cart</Button>
                )}
            </div>
        </Card>
    );
}