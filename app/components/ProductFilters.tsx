
"use client"

import { Checkbox } from "@/components/ui/checkbox"

export default function ProductFilters() {
  return (
    <div className="flex flex-col gap-4">
      <label className="flex items-center gap-2">
        <Checkbox
          id="color-blue"
          defaultChecked={false}
        />
        <span>Blue</span>
      </label>

      <label className="flex items-center gap-2">
        <Checkbox
          id="color-green"
          defaultChecked={false}
        />
        <span>Green</span>
      </label>

      <label className="flex items-center gap-2">
        <Checkbox
          id="color-yellow"
          defaultChecked={false}
        />
        <span>Yellow</span>
      </label>
    </div>
  )
}
