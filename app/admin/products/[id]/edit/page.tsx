"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState, type ChangeEvent, type FormEvent } from "react";

type ProductForm = {
    name: string;
    description: string;
    price: string;
}
export default function EditProduct(){
    const {id} 
    const [formData, setFormData] = useState<ProductForm>({
        name: "Clay House",
        description: "A handmade decorative clay house.",
        price: "10",
    });
    function handleChange(e: ChangeEvent<HTMLInputElement>){
        const {name, value} = e.target
    
    }
    return (
        <div>
            <form>
                <Label>Name</Label>
                <Input id="name" name="name" type="name" value={} onChange={handleChange}/>
                <Label>Description</Label>
                <Textarea id="description" name="description" type="description" onChange={handleChange}/>
                <Label>Price</Label>
                <Input id="price" type="price" value={e.price} onChange={handleChange}/>
                <Button>Edit product</Button>
            </form>
            <h1>Edit product</h1>
            <p>Coming soon.</p>
        </div>
    )
}
