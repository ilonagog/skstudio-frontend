"use client"
import { useState } from "react";

type Product= {
    id: number;
    name: string;
    price: number;
    
};
type ProductSortProps = {
    products: Product[];
    onSort: (sortedProducts: Product[]) => void;
}
export default function ProductSort({products, onSort,}: ProductSortProps){
    const [sortBy, setSortBy] = useState("featured");
   
    function handleSort(value: string){
        setSortBy(value);
        const sortedProducts = [...products].sort((a,b) => {
        if(value === "price-low"){
            return a.price -b.price;
        } 
        if(value  === "price-high"){
           return  b.price - a.price;
        }
        return 0;
    });
    onSort(sortedProducts);
}
    return (
        <div>
            <h1>Sort By:</h1>
            <select
            className="rounded-lg border border-neutral-700 bg-neutral-900 px-3 py-2 text-sm text-white outline-none focus:border-neutral-400"
            value={sortBy} onChange={(e) => handleSort(e.target.value)}
            >
            <option value="featured">Featured</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
            </select>
        </div>
    )
}