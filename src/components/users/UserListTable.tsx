"use client";

import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";
import { User } from "@/types/user.type";
import { DataTable } from "@/components/ui/data-table";
import { useDeleteUser, useUsers } from "@/hooks/useUsers";

import Action from "@/components/ui/action";
import Image from "next/image";
import UserAvatar from "@/components/users/UserAvatar";
import SuccessToast from "@/components/custom/SuccessToast";

export function UserListTable() {
  const { data } = useUsers();

  const { mutate } = useDeleteUser();

  const onDelete = (id: string) => {
    mutate(id, {
      onSuccess: (res) => SuccessToast(res.message),
    });
  };

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
        return <Action onDelete={onDelete} id={id} />;
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
