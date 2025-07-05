import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getPaginationRange } from "@/lib/pagination";
import { cn } from "@/lib/utils";

interface CustomPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (query: any) => void;
}
function pageBtnClass(isActive: boolean) {
  return cn(
    "inline-flex h-9 w-9 rounded-full items-center justify-center rounded-md border text-sm font-medium transition-colors rounded-full",
    isActive
      ? "bg-indigo-500 text-white shadow hover:bg-indigo-600 hover:text-white border-indigo-500"
      : "bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800"
  );
}

export const CustomPagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: CustomPaginationProps) => {
  const paginationRange = getPaginationRange({
    currentPage,
    totalPages,
  });

  return (
    <Pagination className="mt-10">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() =>
              onPageChange({
                page: Math.max(currentPage - 1, 1),
              })
            }
          />
        </PaginationItem>

        {paginationRange.map((pageNum, index) => (
          <PaginationItem key={index}>
            {pageNum === "..." ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                className={pageBtnClass(currentPage === pageNum)}
                href="#"
                isActive={currentPage === pageNum}
                onClick={() =>
                  onPageChange({
                    page: pageNum,
                  })
                }
              >
                {pageNum}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() =>
              onPageChange({
                page: Math.min(currentPage + 1, totalPages as number),
              })
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
