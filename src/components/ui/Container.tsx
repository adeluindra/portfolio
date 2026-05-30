import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type ContainerProps = HTMLAttributes<HTMLDivElement>;

/**
 * Centered content container.
 * Max width 1280px with responsive padding (docs/design.md → Layout).
 */
const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    />
  )
);
Container.displayName = "Container";

export { Container };
