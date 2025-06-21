import configAxios from "@/lib/axios";
import { UserSchemaType } from "@/schema/user.schema";
import { Response } from "@/types";
import { User } from "@/types/user.type";

const UserServices = {
  get: () => configAxios.get<Response<User[]>>("/users"),

  getById: (id: string) => configAxios.get<Response<User>>(`/users/${id}`),

  put: (id: string, data: UserSchemaType) =>
    configAxios.put<Response<User>>(`/users/${id}`, data),

  delete: (id: string) => configAxios.delete<Response>(`/users/${id}`),
};

export default UserServices;
