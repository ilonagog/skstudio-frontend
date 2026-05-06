import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


export default function ProductCard({productItem}: any){
    const {name, price, description, image} = productItem;
    return (
        <Card>
            <img src={image}/>
            <h1>{name}Name of the product</h1>
            <h1>{price}Price</h1>
            <h1>{description}description</h1>
            <Button>Add to the Cart</Button>
            <Button>Add A New Product</Button>
            <Button>Delete</Button>
            <Button>Edit</Button>
        </Card>
    )
}