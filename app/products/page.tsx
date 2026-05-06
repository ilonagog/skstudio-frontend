import ProductCard from "../components/ProductCard";
import painting from "@/public/painting.jpg";
import clayhouse from "@/public/clayhouse.jpg"

export default function ProducsPage(){
    const products=[
        {
            id:1, 
            name:"Painting", 
            price: 5, 
            description: "Painting of colors", 
            image: "/painting.jpg"},
        {
            id:2, 
            name:"Clay House", 
            price: 10, 
            description: "House from the clay",
            image: "/clayhouse.jpg"
        },
    ];
    return(
        <div>
            {products.map(product=>(
             <ProductCard key={product.id} productItem={product} />
            ))}
        </div>
    );
}