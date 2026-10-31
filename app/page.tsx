"use client";

import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";


export default function Home() {
  const router  = useRouter();

  const handleShop = () => {
    router.push("/products")

  }
  return (
      <main >
        <div className="relative w-full h-[93vh]">
          <img 
          src="/home.jpeg" 
          alt="home" 
          className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white gap-4">
            <h1 className="text-4xl font-semibold">
              Welcome to my store!
            </h1>
            <Button onClick={handleShop}>Shop Now</Button>            
          </div>
        </div>
      </main>
  );
}
