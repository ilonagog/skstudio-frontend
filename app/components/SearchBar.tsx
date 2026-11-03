"use client";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function SearchBar(){
    const [search, setSearch] = useState("");
    function handleSubmit(){
        return (<div>

        </div>)
    }


    return (
        <form role="search" onSubmit={handleSubmit} className="relative w-full max-w-xs">

            <Input type="search" value={search} onChange={(e)=> setSearch(e.target.value)} id="search" placeholder="Search " aria-label="Search products" className="pr-10"/>
            <Button type="submit" variant="ghost" size="icon" aria-label="Search" className="absolute right-0 top-1/2 -translate-y-1/2">
                <Search/>
            </Button>
        </form>

    );
}
