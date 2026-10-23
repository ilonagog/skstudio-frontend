"use client";

import { Button } from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {useState, type ChangeEvent, type FormEvent} from "react";
import { useRouter } from "next/navigation";

type NewProductForm = {
    name: string;
    price: string;
    description: string;
}

// type Product = {
//     id: number;
//     name: string;
//     price: number;
//     description: string;
// };


export default function NewProduct(){
    const [errors, setErrors] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<NewProductForm>({
        name: "",
        price: "",
        description: "",
    });
    const router = useRouter();

    function handleChange(e: ChangeEvent<HTMLInputElement>){
        const {name, value} = e.target;
        setFormData((previous)=>({...previous,[name]: value}))

    }
    async function handleSubmit (e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        setErrors([]);
        const price = Number(formData.price);
        if (Number.isNaN(price) || price <0) {
            setErrors(["Price must be a positive number"]);
            return;
        }
        setLoading(true);
        try {
            const response = await fetch("/api/products",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name: formData.name.trim(),
                    description: formData.description.trim(),
                    price,
                })
            });
        
        const data = await response.json();
        if(!response.ok) {
            setErrors(
                data.errors 
                ? Array.isArray(data.errors)
                    ? data.errors
                    : (Object.values(data.errors).flat() as string[])
                : [data.error || "Could not save the product"]
            );
            return;
        }
        setFormData({
            name: "",
            price: "",
            description: "",
            });
        router.push("/admin/products");
        } catch {
            setErrors(["Network error"])
        } finally {
            setLoading(false)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Label>Name</Label>
                <Input id="name" name="name" type="name" value={formData.name} onChange={handleChange}/>
                <Label>Description</Label>
                <Textarea id="description" name="description" type="description" value={formData.description} onChange={handleChange}/>
                <Label>Price</Label>
                <Input id="price" name="price" type="price" value={formData.price} onChange={handleChange}/>
                <Button type="submit" disabled={loading}>{loading ? "Saving..." : "Save product"}</Button>
            </form>
        </div>
    )
}
