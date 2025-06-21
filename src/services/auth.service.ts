import configAxios from "@/lib/axios";
import { LoginSchemaType } from "@/schema/login.schema";
import { SignupType } from "@/schema/signup.schema";
import { Response } from "@/types";
import { User } from "@/types/user.type";

const AuthServices = {
  login: (data: LoginSchemaType) =>
    configAxios.post<Response<User>>("/auth/login", data),
  signup: (data: SignupType) =>
    configAxios.post<Response<User>>("/auth/signup", data),
  verify: (id: string, token: string) =>
    configAxios.get<Response>(`/auth/verify/${id}/${token}`),
};

export default AuthServices;
