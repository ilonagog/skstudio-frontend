import {Button} from "@/components/ui/button";

export default function Home() {
  return (
      <main className="pt-16">
        <div className="relative w-full h-[80vh]">
          <img 
          src="/home.jpg" 
          alt="home" 
          className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white gap-4">
            <h1 className="text-4xl font-semibold">
              Welcome to my store!
            </h1>
            <Button>Shop Now</Button>            
          </div>
        </div>
      </main>
  );
}
