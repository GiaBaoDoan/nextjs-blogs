"use client";

import Image from "next/image";
import Action from "@/components/ui/action";
import useQuery from "@/hooks/useQuery";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Blog } from "@/types/blog.type";
import { usePosts } from "@/hooks/useBlogs";

export default function BlogListTable() {
  const { queries } = useQuery({ limit: 100, page: 1 });
  const { data } = usePosts(queries);
  const columns: ColumnDef<Blog>[] = [
    {
      header: "Trạng thái",
      accessorKey: "status",
      cell: ({ row }) => {
        const status = row.original.status;
        return (
          <Badge variant="secondary">
            {status === "published" ? "Công khai" : "Nháp"}
          </Badge>
        );
      },
    },
    {
      header: "Ảnh",
      accessorKey: "thumbnail",
      cell: ({ row }) => {
        const thumbnail = row.original.thumbnail;
        return (
          <div className="w-[150px]">
            <Image
              src={thumbnail}
              alt="Ảnh blog"
              width={150}
              height={150}
              className="w-[150px] h-[80px] object-cover rounded"
            />
          </div>
        );
      },
    },
    {
      header: "Tiêu đề",
      accessorKey: "title",
      cell: ({ row }) => {
        return <span className="whitespace-normal">{row.original.title}</span>;
      },
    },

    {
      header: "Ngày tạo",
      accessorKey: "createdAt",
      cell: ({ row }) => {
        return (
          <span>{format(row.original.createdAt, "hh:mm:ss dd/MM/yyyy ")}</span>
        );
      },
    },

    {
      header: "Danh mục",
      accessorKey: "category",
      cell: ({ row }) => {
        return <Badge variant="secondary">{row.original.category.name}</Badge>;
      },
    },

    {
      header: "Slug",
      accessorKey: "slug",
      cell: ({ row }) => {
        return (
          <span className="whitespace-normal break-words w-[150px] text-blue-700">
            {row.original.slug}
          </span>
        );
      },
    },
    {
      header: "Actions",
      cell: ({ row }) => {
        const id = row.original._id;
        return <Action onDelete={() => {}} id={id} />;
      },
    },
  ];

  return (
    <div>
      <DataTable
        filterColumnKey="title"
        columns={columns}
        data={(data?.data as Blog[]) || []}
      />
    </div>
  );
}
