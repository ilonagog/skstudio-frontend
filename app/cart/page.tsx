import {Button} from "@/components/ui/button";
import  {useCart} from "../context/CartContext"
export default function Cart (){
    return (
        <div>
            <h1>My cart</h1>
            <Button>Delete this product</Button>
        </div>
    )
}