"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { useParams, useRouter } from "next/navigation";

type ProductForm = {
    name: string;
    description: string;
    price: string;
}
export default function EditProduct(){
    const {id} = useParams<{id: string}>();
    const router = useRouter();
    const [formData, setFormData] = useState<ProductForm>({
        name: "",
        description: "",
        price: "",
    });
    const [errors, setErrors]= useState<string[]>([])

    function handleChange(e: ChangeEvent<HTMLInputElement>){
        const {name, value} = e.target;
        setFormData((previous)=> ({...previous, [name]: value}));
    
    }
    async function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        const response = await fetch(`/api/products/${id}`, {
            method: "PATCH",
            headers: 
            {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify()
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Label>Name</Label>
                <Input id="name" name="name" type="name" value={formData.name} onChange={handleChange}/>
                <Label>Description</Label>
                <Textarea id="description" name="description" type="description" value={formData.description} onChange={handleChange}/>
                <Label>Price</Label>
                <Input id="price" type="nummber" value={formData.price} onChange={handleChange}/>
                <Button type="submit">Edit product</Button>
                <Button type="button" onClick={()=> router.push("/admin/products")}>Cancel</Button>
            </form>
        </div>
    )
}
