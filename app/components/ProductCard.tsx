import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


export default function ProductCard({productItem}: any){
    const {name, price, description} = productItem;
    return (
        <Card>
            <h1>{name}Name of the product</h1>
            <h1>{price}Price</h1>
            <h1>{description}description</h1>
        </Card>
    )
}