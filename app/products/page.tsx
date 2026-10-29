"use client";
import {useState} from "react";
import ProductCard from "../components/ProductCard";
import { Input } from "@/components/ui/input";

import ProductSort from "../components/ProductSort";
import ProductFilters from "../components/ProductFilters";



export default function ProductsPage(){
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            <div>
            <ProductSort/>
            <ProductFilters/>
            </div>
            {products.map(product=>(
             <ProductCard key={product.id} productItem={product} isAdmin={false}/>
            ))}
            <Input 
            />
        </div>
    );
}