
"use client"
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button";

export type ProductFiltersValue = {
  colors: string[];
  materials: string[];
  minPrice: string;
  maxPrice: string;
};
type ProductFiltersProps = {
  onApply: (filters: ProductFiltersValue) => void
};
const colors= [
  { name: "Sage", hex: "#9CAF88" },
  { name: "Cream", hex: "#F3EBDD" },
  { name: "Red", hex: "#B84A45" },
  { name: "Blue", hex: "#7396B6" },
  { name: "Black", hex: "#242424" },
];
 const materials =[
  "Wool",
  "Cotton",
  "Mohair",
  "Ceramic",
 ];

export default function ProductFilters({onApply} : ProductFiltersProps) {
  const [selectColors, setSelectColors] = useState<string[]>([]);
  const [selectMaterials, setSelectMaterials] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [isOpen, setIsOpen] = useState(false)

  function toggleSelection(
    value: string,
    selected: string[],
    setSelected: (values: string[]) => void
  ) {
    setSelected(
      selected.includes(value)
        ? selected.filter((item) => item !== value)
        : [...selected, value]
    );
  }

  function clearFilters() {
    setSelectColors([]);
    setSelectMaterials([]);
    setMinPrice("");
    setMaxPrice("");

    onApply({
      colors: [],
      materials: [],
      minPrice: "",
      maxPrice: "",
    });
  }

  function applyFilters() {
    onApply({
      colors: selectColors,
      materials: selectMaterials,
      minPrice,
      maxPrice,
    });
  }


  return (
    <div>

    <Button onClick={()=> setIsOpen(true)} className="text-lg font-semibold">Filters</Button>
    {isOpen && (

    <aside className="w-full max-w-sm space-y-5 rounded-xl border p-5">
      <div className="flex items-center justify-between">
        <button
        type="button"
        aria-label="Close modal"
        onClick={()=>setIsOpen(false)}>X</button>
        <button
          type="button"
          onClick={clearFilters}
          className="text-sm underline"
        >
          Clear all
        </button>
      </div>

      {/* Color filter */}
      <details open className="border-b pb-4">
        <summary className="cursor-pointer font-medium">
          Color
        </summary>

        <div className="mt-3 space-y-3">
          {colors.map((color) => (
            <label
              key={color.name}
              className="flex cursor-pointer items-center gap-3 text-sm"
            >
              <input
                type="checkbox"
                checked={selectColors.includes(color.name)}
                onChange={() =>
                  toggleSelection(
                    color.name,
                    selectColors,
                    setSelectColors
                  )
                }
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

      {/* Material filter */}
      <details open className="border-b pb-4">
        <summary className="cursor-pointer font-medium">
          Material
        </summary>

        <div className="mt-3 space-y-3">
          {materials.map((material) => (
            <label
              key={material}
              className="flex cursor-pointer items-center gap-3 text-sm"
            >
              <input
                type="checkbox"
                checked={selectMaterials.includes(material)}
                onChange={() =>
                  toggleSelection(
                    material,
                    selectMaterials,
                    setSelectMaterials
                  )
                }
                className="size-4 accent-stone-800"
              />

              {material}
            </label>
          ))}
        </div>
      </details>

      {/* Price filter */}
      <details open className="border-b pb-4">
        <summary className="cursor-pointer font-medium">
          Price
        </summary>

        <div className="mt-3 grid grid-cols-2 gap-3">
          <label className="text-sm">
            Min ($)
            <input
              type="number"
              min="0"
              value={minPrice}
              onChange={(event) =>
                setMinPrice(event.target.value)
              }
              placeholder="0"
              className="mt-1 w-full rounded-md border px-3 py-2"
            />
          </label>

          <label className="text-sm">
            Max ($)
            <input
              type="number"
              min="0"
              value={maxPrice}
              onChange={(event) =>
                setMaxPrice(event.target.value)
              }
              placeholder="100"
              className="mt-1 w-full rounded-md border px-3 py-2"
            />
          </label>
        </div>
      </details>

      <button
        type="button"
        onClick={applyFilters}
        className="w-full rounded-md bg-stone-900 px-4 py-3 text-sm font-medium text-white hover:bg-stone-700"
      >
        Apply filters
      </button>
      <button type="button" onClick={()=>setIsOpen(false)}
      className="mt-5 rounded-md bg-black px-4 py-2 text-white">Cancel</button>
    </aside>
    )}
    </div>
  );
}