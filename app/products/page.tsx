import ProductCard from "../components/ProductCard";
import painting from "@/public/painting.jpg";
import clayhouse from "@/public/clayhouse.jpg"
import knitting1 from "@/public/knitting1.jpg"
import christmas from "@/public/christmas.jpg"

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
                {
            id:3, 
            name:"Knitted scarf", 
            price: 5, 
            description: "Purple scarf", 
            image: "/knitting1.jpg"},
        {
            id:4, 
            name:"Christmas ornament", 
            price: 10, 
            description: "Christmas Toy",
            image: "/christmas.jpg"
        },
    ];
    return(
        <div className="flex justify-content: space-around p-6">
            {products.map(product=>(
             <ProductCard key={product.id} productItem={product} />
            ))}
        </div>
    );
}