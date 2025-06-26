"use client";

import Action from "@/components/ui/action";
import SuccessToast from "@/components/custom/SuccessToast";
import { format } from "date-fns";
import { ColumnDef } from "@tanstack/react-table";
import { Category } from "@/types/category.type";
import { DataTable } from "@/components/ui/data-table";
import { useCategories, useDeleteCategory } from "@/hooks/useCategories";

const CategoriesList = () => {
  const { data } = useCategories();
  const { mutate } = useDeleteCategory();

  const onDelete = (id: string) => {
    mutate(id, {
      onSuccess: (res) => SuccessToast(res.message),
    });
  };

  const collums: ColumnDef<Category>[] = [
    {
      header: "Tên danh mục",
      accessorKey: "name",
    },
    {
      header: "Slug",
      accessorKey: "slug",
    },
    {
      header: "Ngày tạo",
      accessorKey: "createdAt",
      cell: ({ row }) => {
        const date = row.original.createdAt;
        return <span>{format(date, "hh:mm:ss dd/MM/yyyy")}</span>;
      },
    },
    {
      header: "Action",
      cell: ({ row }) => {
        const id = row.original._id;
        return <Action onDelete={onDelete} id={id} />;
      },
    },
  ];

  return (
    <DataTable
      filterColumnKey="name"
      columns={collums}
      data={(data?.data as Category[]) || []}
    />
  );
};

export default CategoriesList;
