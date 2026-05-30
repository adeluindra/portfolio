import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

/**
 * Build a compact list of page numbers with ellipses, e.g. 1 … 4 5 6 … 10.
 * Always shows the first and last page plus a window around the current page.
 */
function getPageItems(
  current: number,
  total: number
): Array<number | "ellipsis"> {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const items: Array<number | "ellipsis"> = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  if (start > 2) items.push("ellipsis");
  for (let page = start; page <= end; page++) items.push(page);
  if (end < total - 1) items.push("ellipsis");

  items.push(total);
  return items;
}

/**
 * Accessible page navigation. Renders nothing when there's a single page.
 */
export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const items = getPageItems(currentPage, totalPages);
  const baseBtn =
    "inline-flex size-10 items-center justify-center rounded-lg border text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40";

  return (
    <nav
      aria-label="Pagination"
      className={cn("flex items-center justify-center gap-2", className)}
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Go to previous page"
        className={cn(
          baseBtn,
          "border-border bg-transparent text-foreground hover:bg-muted"
        )}
      >
        <ChevronLeft aria-hidden="true" className="size-4" />
      </button>

      <ul className="flex items-center gap-2">
        {items.map((item, index) =>
          item === "ellipsis" ? (
            <li
              key={`ellipsis-${index}`}
              aria-hidden="true"
              className="inline-flex size-10 items-center justify-center text-sm text-muted-foreground"
            >
              …
            </li>
          ) : (
            <li key={item}>
              <button
                type="button"
                onClick={() => onPageChange(item)}
                aria-label={`Go to page ${item}`}
                aria-current={item === currentPage ? "page" : undefined}
                className={cn(
                  baseBtn,
                  item === currentPage
                    ? "border-transparent bg-primary text-primary-foreground"
                    : "border-border bg-transparent text-foreground hover:bg-muted"
                )}
              >
                {item}
              </button>
            </li>
          )
        )}
      </ul>

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Go to next page"
        className={cn(
          baseBtn,
          "border-border bg-transparent text-foreground hover:bg-muted"
        )}
      >
        <ChevronRight aria-hidden="true" className="size-4" />
      </button>
    </nav>
  );
}
