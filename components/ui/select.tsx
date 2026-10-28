
"use client"

import * as React from "react"

type SelectProps = {
  value: string
  onValueChange: (value: string) => void
  placeholder?: string
  children: React.ReactNode
}

type SelectItemProps = {
  value: string
  children: React.ReactNode
}

export function Select({
  value,
  onValueChange,
  placeholder,
  children,
}: SelectProps) {
  return (
    <select
      value={value}
      onChange={(event) => onValueChange(event.target.value)}
      aria-label={placeholder ?? "Select an option"}
      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
    >
      {placeholder && <option value="">{placeholder}</option>}
      {children}
    </select>
  )
}

export function SelectItem({ value, children }: SelectItemProps) {
  return <option value={value}>{children}</option>
}
