import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {Heart, Star} from "lucide-react";
import { useState } from "react";


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
    const [isFavorite, setIsFavorite] = useState(false);
    const {name, price, description, image, rating, reviewCount} = productItem;
  
    return (
        <Card className="w-full max-w-sm p-4">
            <img src={image} width="auto"/>
            <h1>{name}</h1>
            <h1>${price}</h1>
            <h1>{description}</h1>
            <h1>{rating}</h1>
            {isAdmin ? (
                <div>
                    <Button>Add A New Product</Button>
                    <Button>Delete</Button>
                    <Button>Edit</Button>
                </div>
            ) : (
            <Button>Add to the Cart</Button>
            )}
        </Card>
    )
}