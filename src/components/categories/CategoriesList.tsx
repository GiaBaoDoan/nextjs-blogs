"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getAllCategory } from "@/store/thunk/get-list-categories";
import { format } from "date-fns";
import { deleteCategory } from "@/store/thunk/delete-category";
import { ColumnDef } from "@tanstack/react-table";
import { Category } from "@/types/category.type";
import { DataTable } from "@/components/ui/data-table";
import Action from "@/components/ui/action";

const CategoriesList = () => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.CategoryListReducer);

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

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
        return <Action onDelete={() => deleteCategory(id)} id={id} />;
      },
    },
  ];

  return <DataTable columns={collums} data={categories} />;
};

export default CategoriesList;
