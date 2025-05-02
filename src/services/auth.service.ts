import configAxios from "@/lib/axios";
import { LoginType } from "@/schema/login.schema";
import { SignupType } from "@/schema/signup.schema";
import { Response } from "@/types";
import { User } from "@/types/user.type";

const AuthServices = {
  login: (data: LoginType) =>
    configAxios.post<Response<User>>("/auth/login", data),
  signup: (data: SignupType) =>
    configAxios.post<Response<User>>("/auth/signup", data),
};

export default AuthServices;
