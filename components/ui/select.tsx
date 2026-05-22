import * as React from 'react'
import { cn } from '@/lib/utils'

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          ref={ref}
          className={cn(
            'flex h-10 w-full appearance-none rounded-md border border-border bg-background pl-3 pr-9 text-[15px] text-foreground transition-colors duration-120 focus:outline-2 focus:outline-ring focus:outline-offset-0 focus:border-primary hover:border-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer',
            className,
          )}
          {...props}
        >
          {children}
        </select>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 stroke-muted-foreground pointer-events-none"
          aria-hidden
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    )
  },
)
Select.displayName = 'Select'

export { Select }
