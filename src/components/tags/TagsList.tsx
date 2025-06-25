"use client";

import { format } from "date-fns";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Tag } from "@/types/tag.type";
import { useDeleteTag, useTags } from "@/hooks/useTag";
import Action from "@/components/ui/action";

const TagsList = () => {
  const { data } = useTags();

  console.log(data);
  const deleteTag = useDeleteTag();
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
        return <Action onDelete={() => {}} id={id} />;
      },
    },
  ];

  return (
    <DataTable
      filterColumnKey="name"
      data={(data?.data as Tag[]) || []}
      columns={columns}
    />
  );
};

export default TagsList;
