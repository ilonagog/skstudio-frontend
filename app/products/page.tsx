import ProductCard from "../components/ProductCard";

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
        <div className="flex justify-around gap-6 p-6">
            {products.map(product=>(
             <ProductCard key={product.id} productItem={product} />
            ))}
        </div>
    );
}