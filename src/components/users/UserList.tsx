"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getAllUsers } from "@/store/thunk/getAllUsers";
import { useEffect } from "react";
import { format } from "date-fns";
import Action from "@/components/ui/action";

export function UserList() {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.UserListReducer);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className="border p-2 rounded">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Tên</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Ngày tạo</TableHead>
            <TableHead>Email verifed</TableHead>
            <TableHead>Quyền</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Thao tác</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                {format(user.createdAt, "dd/MM/yyyy - hh:mm:ss")}
              </TableCell>
              <TableCell>Ok</TableCell>
              <TableCell>{user.isAdmin ? "Admin" : "user"}</TableCell>
              <TableCell>{user.status ? "hien thi" : "an danh"}</TableCell>
              <TableCell>
                <Action id={user._id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
