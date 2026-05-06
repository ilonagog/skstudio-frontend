import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


export default function ProductCard({productItem}: any){
    const {name, price, description, image} = productItem;
    return (
        <Card className="w-full max-w-sm">
            <img src={image}/>
            <h1>{name}</h1>
            <h1>${price}</h1>
            <h1>{description}</h1>
            <Button>Add to the Cart</Button>
            <Button>Add A New Product</Button>
            <Button>Delete</Button>
            <Button>Edit</Button>
        </Card>
    )
}