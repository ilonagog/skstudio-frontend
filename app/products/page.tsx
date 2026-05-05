import ProductCard from "../components/ProductCard";

export default function ProducsPage(){
    const products=[
        {id:1, name:"test1", price: 5, description: "Testing"},
        {id:2, name:"test2", price: 10, description: "Testing1"},
    ];
    return(
        <div>
            {products.map(product=>(
             <ProductCard key={product.id} productItem={product} />
            ))}
        </div>
    );
}