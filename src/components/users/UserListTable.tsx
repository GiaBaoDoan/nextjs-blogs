"use client";

import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";
import { User } from "@/types/user.type";
import { DataTable } from "@/components/ui/data-table";
import { useUsers } from "@/hooks/useUsers";

import Action from "@/components/ui/action";
import Image from "next/image";
import UserAvatar from "@/components/users/UserAvatar";

export function UserListTable() {
  const { data } = useUsers();

  const columns: ColumnDef<User>[] = [
    {
      header: "Họ tên",
      accessorKey: "username",
    },
    {
      header: "Ảnh",
      accessorKey: "image",
      cell: ({ row }) => {
        const image = row.original.image;
        return (
          <div>
            {image ? (
              <Image
                src={image}
                alt="ảnh avatar"
                width={200}
                height={200}
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <UserAvatar />
            )}
          </div>
        );
      },
    },
    {
      header: "Email",
      accessorKey: "email",
    },

    {
      header: "Quyền",
      accessorKey: "role",
      cell: ({ row }) => {
        return <Badge variant="secondary">{row.original.role}</Badge>;
      },
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
      header: "Status",
      cell: ({ row }) => {
        return <Badge variant="secondary">{row.original.status}</Badge>;
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
      filterColumnKey="email"
      data={(data?.data as User[]) || []}
      columns={columns}
    />
  );
}
