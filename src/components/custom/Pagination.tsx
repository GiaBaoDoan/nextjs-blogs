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

interface CustomPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (query: any) => void;
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
