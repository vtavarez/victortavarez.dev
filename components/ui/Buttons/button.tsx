import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:text-primary-foreground focus-visible:ring-ring focus-visible:ring-primary focus-visible:bg-primary disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        theme: "",
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-primary bg-primary hover:bg-accent hover:text-accent-foreground text-background",
        secondary:
          "relative xl:ml-auto xl:text-lg px-6 py-2 xl:px-9 xl:py-4 bg-transparent shadow-project rounded-none overflow-hidden font-medium border-4 border-primary text-base focus-visible:text-primary focus-visible:bg-transparent highlight-animation",
        ghost: "hover:bg-primary hover:text-primary-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        contact:
          "relative px-6 py-4 xl:px-12 xl:py-6 rounded-none overflow-hidden font-medium border-4 border-primary bg-transparent text-base xl:text-lg text-primary focus-visible:text-primary focus-visible:bg-transparent highlight-animation",
      },
      size: {
        default: "h-fit",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
