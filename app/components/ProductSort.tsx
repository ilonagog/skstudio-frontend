"use client"
import { useState } from "react";
import { Select, SelectItem} from "@/components/ui/select";

export default function ProductSort(){
    const [sortBy, setSortBy] = useState("featured");
    return (
        <div>
            <h1>Sort By:</h1>
            <Select value={sortBy} onValueChange={setSortBy} >
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: low to high</SelectItem>
                <SelectItem value="price-high">Price: high to low</SelectItem>
                <SelectItem value="rating">By rate</SelectItem>
            </Select>
        </div>
    )
}