import configAxios from "@/lib/axios";
import { UserSchemaType } from "@/schema/user.schema";
import { Response } from "@/types";
import { User } from "@/types/user.type";

export const getUsers = async () => {
  const res = await configAxios.get<Response<User[]>>("/users");
  return res.data;
};

export const getUserById = async (id: string) => {
  const res = await configAxios.get<Response<User>>(`/users/${id}`);
  return res.data;
};

export const updateUser = async (id: string, data: UserSchemaType) => {
  const res = await configAxios.put<Response<User>>(`/users/${id}`, data);
  return res.data;
};

export const deleteUser = async (id: string) => {
  const res = await configAxios.delete<Response>(`/users/${id}`);
  return res.data;
};
