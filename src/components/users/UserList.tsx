"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getAllUsers } from "@/store/thunk/getAllUsers";
import { useEffect } from "react";

export function TableDemo() {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.UserReducer);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">id</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Tên</TableHead>
          <TableHead className="text-right">Quyền</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user._id}>
            <TableCell className="font-medium">{user._id}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell className="text-right">
              {user.isAdmin ? "Admin" : "user"}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter></TableFooter>
    </Table>
  );
}
