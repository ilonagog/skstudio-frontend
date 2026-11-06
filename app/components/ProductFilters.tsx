
"use client"
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";   


const colors= [
  { name: "Sage", hex: "#9CAF88" },
  { name: "Cream", hex: "#F3EBDD" },
  { name: "Red", hex: "#B84A45" },
  { name: "Blue", hex: "#7396B6" },
  { name: "Black", hex: "#242424" },
  {name: "White", hex: "#ffffffff" }
];

const materials =[
 "Wool",
 "Cotton",
 "Mohair",
 "Clay",
 "Canvas",
];
const categories = [
 "Toys",
 "Clothing",
 "Painting",
 "Accessories",
 "Home Decor"
];
type ProductFiltersProps = {

  selectedColors: string[];
  onColorsChange: (colors: string[]) => void;
  selectedCategories: string[];
  onCategoriesChange: (categories: string[]) => void;
  selectedMaterials: string[];
  onMaterialsChange: (materials: string[]) => void;
}

export default function ProductFilters({selectedColors, onColorsChange, selectedCategories, onCategoriesChange, selectedMaterials, onMaterialsChange}: ProductFiltersProps){
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedColors, setSelectedColors]= useState<string[]>([]);

  const handleColorChange = (color: string) =>{
    if(selectedColors.includes(color)){
      onColorsChange(selectedColors.filter((c)=>c !== color));
    }else{
       onColorsChange([...selectedColors, color])}
  }
  const handleCategoriesChange = (category: string) => {
    if(selectedCategories.includes(category)){
      onCategoriesChange(selectedCategories.filter((ct)=> ct !== category))
    }else{
      onCategoriesChange([...selectedCategories, category])
    }
  }
  const handleMaterialsChange = (material: string) => {
    if(selectedMaterials.includes(material)){
      onMaterialsChange(selectedMaterials.filter((m)=> m !== material))
    }else{
      onMaterialsChange([...selectedMaterials, material])
    }
  }
  
  return (
    <div>
      <Button onClick={()=>setIsOpen(true)} className="text-lg font-semibold">Filters</Button>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={()=> setIsOpen(false)}
          />
            <div className="fixed inset-y-0 left-0 z-50 w-80 max-w-[85w] overflow-y-auto bg-white p-5 text-stone-900 shadow-xl">
                  <button type="button" onClick={()=>setIsOpen(false)} aria-label="Close filters" className="flex h-10 items-center justify-center rounded-full text-stone-700">
                    <X className="h-5 w-5"/>
                  </button>
            
            <details open className="border-b pb-4">
              <summary className="cursor-pointer font-medium">
                Categories
              </summary>
              <div>
                {categories.map((category)=>{
                  const isActive =selectedCategories.includes(category);
                  return(
                    <label key={category}>
                      <Checkbox checked={isActive} onCheckedChange={()=>handleCategoriesChange(category)}/>{category}
                    </label>
                  )
                })}
              </div>
            </details>
      
            <details open className="border-b pb-4">
              <summary className="cursor-pointer font-medium">
                Material
              </summary>
              <div>
                {materials.map((material)=>{
                  const isActive = selectedMaterials.includes(material);
                  return (
                    <label key={material}>
                      <Checkbox checked={isActive} onCheckedChange={()=>handleMaterialsChange(material)}/>{material}
                    </label>
                  )
                })}
              </div>
            </details>
            <details open className="border-b pb-4">
              <summary className="cursor-pointer font-medium">
                Color
              </summary>
              <div className="mt-3 space-y-3">
                {colors.map((color) => (
                  <label key={color.name} className="flex cursor-pointer items-center gap-3 text-sm">
                    <input
                      type="checkbox"
                      checked={selectedColors.includes(color.name)}
                      onChange={() => handleColorChange(color.name)}
                      className="size-4 accent-stone-800"
                    />
                    <span
                      className="size-5 rounded-full border"
                      style={{ backgroundColor: color.hex }}
                    />
                    {color.name}
                  </label>
                ))}
              </div>
            </details>
            <button type="button" onClick={()=>setIsOpen(false)} className="mt-5 rounded-md bg-black px-4 py-2 text-white">Cancel</button>
          </div>
        </>
      )}
    </div>
  )}



