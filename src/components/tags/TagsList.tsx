"use client";

import Action from "@/components/ui/action";
import { format } from "date-fns";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Tag } from "@/types/tag.type";
import { useDeleteTag, useTags } from "@/hooks/useTag";
import SuccessToast from "@/components/custom/SuccessToast";

const TagsList = () => {
  const { data } = useTags();

  const { mutate } = useDeleteTag();

  const onDelete = (id: string) => {
    mutate(id, {
      onSuccess: (res) => SuccessToast(res.message),
    });
  };

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
        return <Action onDelete={onDelete} id={id} />;
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
