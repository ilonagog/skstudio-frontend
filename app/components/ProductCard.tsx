import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


type Product = {
    name: string;
    price: number;
    description: string;
    image: string;

}
type ProductCardProps = {
    productItem: Product;
    isAdmin: boolean;
};


export default function ProductCard({productItem, isAdmin,}: ProductCardProps){
    const {name, price, description, image} = productItem;
  
    return (
        <Card className="w-full max-w-sm p-4">
            <img src={image} width="auto"/>
            <h1>{name}</h1>
            <h1>${price}</h1>
            <h1>{description}</h1>
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