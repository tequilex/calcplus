"use client"

import * as React from "react"
import { Minus, Plus } from "lucide-react"

import { cn } from "@/lib/utils"

type StepperProps = {
  value: number
  onValueChange: (n: number) => void
  min?: number
  max?: number
  step?: number
} & Omit<React.ComponentProps<"div">, "onChange">

function Stepper({
  value,
  onValueChange,
  min = 0,
  max = Number.POSITIVE_INFINITY,
  step = 1,
  id,
  className,
  ...props
}: StepperProps) {
  const clamp = (n: number) => Math.min(max, Math.max(min, n))
  const dec = () => onValueChange(clamp(value - step))
  const inc = () => onValueChange(clamp(value + step))

  return (
    <div
      data-slot="stepper"
      className={cn(
        "grid grid-cols-[40px_1fr_40px] h-10 rounded-md border border-border bg-background overflow-hidden",
        "focus-within:border-primary focus-within:outline-2 focus-within:outline-ring focus-within:outline-offset-0",
        "transition-colors duration-120",
        className
      )}
      {...props}
    >
      <button
        type="button"
        aria-label="Уменьшить"
        onClick={dec}
        disabled={value <= min}
        className="flex items-center justify-center h-full w-full text-foreground cursor-pointer hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-120"
      >
        <Minus size={14} strokeWidth={2} aria-hidden />
      </button>
      <input
        id={id}
        type="number"
        min={min}
        max={Number.isFinite(max) ? max : undefined}
        step={step}
        inputMode="numeric"
        value={value}
        onChange={(e) => {
          const n = parseInt(e.target.value, 10)
          if (Number.isFinite(n)) onValueChange(clamp(n))
        }}
        className="w-full min-w-0 bg-transparent border-l border-r border-border text-foreground text-[15px] text-center p-0 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
      <button
        type="button"
        aria-label="Увеличить"
        onClick={inc}
        disabled={value >= max}
        className="flex items-center justify-center h-full w-full text-foreground cursor-pointer hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-120"
      >
        <Plus size={14} strokeWidth={2} aria-hidden />
      </button>
    </div>
  )
}

export { Stepper }
