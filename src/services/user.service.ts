import configAxios from "@/lib/axios";
import { UserFormType } from "@/schema/user.schema";
import { Response } from "@/types";
import { User } from "@/types/user.type";

const UserServices = {
  getAllUsers: () => configAxios.get<Response<User[]>>("/users"),
  getUserById: (id: string) => configAxios.get<Response<User>>(`/users/${id}`),
  updateUser: (id: string, data: UserFormType) =>
    configAxios.put<Response<User>>(`/users/${id}`, data),
};

export default UserServices;
