"use client";

import ProductCard from "../components/ProductCard";


import ProductSort from "../components/ProductSort";
import ProductFilters from "../components/ProductFilters";
import { useState } from "react";


const products=[
    {
        id:1, 
        name:"Painting", 
        price: 5, 
        description: "Painting of colors", 
        image: "/painting.jpeg"},
    {
        id:2, 
        name:"Clay House", 
        price: 10, 
        description: "House from the clay",
        image: "/clayhouse.jpeg"
    },
            {
        id:3, 
        name:"Knitted scarf", 
        price: 5, 
        description: "Purple scarf", 
        image: "/scarf.jpeg"},
    {
        id:4, 
        name:"Christmas ornament", 
        price: 10, 
        description: "Christmas Toy",
        image: "/christmas.jpeg"
    },
];

export default function ProductsPage(){
    const [sortedProducts, setSortedProducts] = useState(products);
  return (
<main className="min-h-screen bg-[#5E6A62] px-5 py-10 text-gray-900 sm:px-8">      <div className="mx-auto max-w-7xl">
        {/* Page heading */}
        <div className="mb-10 border-b border-neutral-800 pb-6">
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-black-400">
            SKStudio Collection
          </p>
        </div>

        {/* Sidebar + products */}
        {/* <div className="grid grid-cols-1 gap-10 md:grid-cols-[220px_minmax(0,1fr)]"> */}
          {/* Left sidebar */}
            <div className="mb-6 flex items-center justify-between gap-4">
            <ProductFilters />
            <div>

              <ProductSort products={products} onSort={setSortedProducts}/>
            </div>
            </div>
          {/* Right side */}
          <section className="min-w-0">
            <div className="mb-6 flex items-center justify-between gap-4">
              <p className="mx-auto max-w-md text-center text-black-400">
                Explore our collection
              </p>

            </div>

            {/* Product cards */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {sortedProducts.map((product) => (
                <article key={product.id} className="group min-w-0">
                  <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="pt-3">
                    <h2 className="text-sm font-medium text-black-100">
                      {product.name}
                    </h2>
                    <p className="mt-1 text-sm text-black-400">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        {/* </div> */}
      </div>
    </main>
  );
}