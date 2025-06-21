"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  ColumnDef,
  PaginationState,
  getFilteredRowModel,
} from "@tanstack/react-table";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { useState } from "react";

interface DataTableProps<TData> {
  columns: ColumnDef<TData, any>[];
  data: TData[];
  initialPageSize?: number;
}

export function DataTable<TData>({
  columns,
  data,
  initialPageSize = 10,
}: DataTableProps<TData>) {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: initialPageSize,
  });

  const table = useReactTable({
    data,
    columns,
    state: { pagination },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div>
      {/* Filter data table */}
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              View <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Data Table */}
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="p-5">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell className="p-5" key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Phân trang */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-muted-foreground text-sm">
          0 of {table.getPageCount()} row(s) selected.
        </p>

        <div className="flex items-center gap-5">
          {/* Rows per page */}
          <div className="flex items-center gap-3 text-sm">
            <span className="font-medium">Rows per page</span>
            <Select
              value={`${pagination.pageSize}`}
              onValueChange={(size) => table.setPageSize(Number(size))}
            >
              <SelectTrigger className="w-[80px]">
                <SelectValue placeholder="Rows" />
              </SelectTrigger>
              <SelectContent>
                {[10, 20, 30, 50].map((size) => (
                  <SelectItem key={size} value={String(size)}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Page info */}
          <span className="text-sm font-medium">
            Page {pagination.pageIndex + 1} of {table.getPageCount()}
          </span>

          {/* Pagination buttons */}
          <div className="flex gap-2 items-center">
            {[
              {
                icon: <ChevronsLeft />,
                onClick: () => table.setPageIndex(0),
                disabled: !table.getCanPreviousPage(),
              },
              {
                icon: <ChevronLeft />,
                onClick: () => table.previousPage(),
                disabled: !table.getCanPreviousPage(),
              },
              {
                icon: <ChevronRight />,
                onClick: () => table.nextPage(),
                disabled: !table.getCanNextPage(),
              },
              {
                icon: <ChevronsRight />,
                onClick: () => table.setPageIndex(table.getPageCount() - 1),
                disabled: !table.getCanNextPage(),
              },
            ].map(({ icon, onClick, disabled }, i) => (
              <Button
                key={i}
                variant="outline"
                size="sm"
                onClick={onClick}
                disabled={disabled}
              >
                {icon}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
