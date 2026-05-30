import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

/**
 * Text input primitive with focus glow (docs/design.md → Contact).
 * Accepts all native input attributes.
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "flex h-11 w-full rounded-lg border border-input bg-background px-3.5 py-2 text-sm",
        "placeholder:text-muted-foreground",
        "transition-shadow focus-visible:outline-none focus-visible:border-ring",
        "focus-visible:ring-2 focus-visible:ring-ring/40",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-red-500/30",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };
