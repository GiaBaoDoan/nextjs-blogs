"use client";

import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { format } from "date-fns";
import { getAllTags } from "@/store/thunk/get-list-tags";
import { deleteTag } from "@/store/thunk/delete-tag";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Tag } from "@/types/tag.type";
import Action from "@/components/ui/action";

const TagsList = () => {
  const dispatch = useAppDispatch();
  const { tags } = useAppSelector((state) => state.TagListReducer);

  useEffect(() => {
    dispatch(getAllTags());
  }, [dispatch]);

  const columns: ColumnDef<Tag>[] = [
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
        return <Action onDelete={() => deleteTag(id)} id={id} />;
      },
    },
  ];

  return <DataTable data={tags} columns={columns} />;
};

export default TagsList;
