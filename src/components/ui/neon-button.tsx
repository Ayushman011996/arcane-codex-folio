import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const neonButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
  {
    variants: {
      variant: {
        hero: "bg-transparent border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background neon-glow hover:shadow-intense",
        primary: "bg-gradient-neon text-background hover:opacity-90 shadow-glow hover:shadow-intense",
        ghost: "glass glass-hover border text-foreground hover:text-neon-blue",
        outline: "border-2 border-muted-foreground text-foreground hover:border-neon-purple hover:text-neon-purple hover:shadow-glow",
        glow: "bg-neon-purple/20 border border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-background shadow-glow hover:shadow-intense",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface NeonButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof neonButtonVariants> {
  asChild?: boolean
}

const NeonButton = React.forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(neonButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-glow transition-opacity duration-300" />
      </Comp>
    )
  }
)
NeonButton.displayName = "NeonButton"

export { NeonButton, neonButtonVariants }