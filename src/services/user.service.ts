import configAxios from "@/lib/axios";
import { Response } from "@/types";
import { User } from "@/types/user.type";

const UserServices = {
  getAllUsers: () => configAxios.get<Response<User[]>>("/users"),
};

export default UserServices;
