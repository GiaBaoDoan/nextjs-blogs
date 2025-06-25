import configAxios from "@/lib/axios";
import { LoginSchemaType } from "@/schema/login.schema";
import { SignupType } from "@/schema/signup.schema";
import { Response } from "@/types";
import { User } from "@/types/user.type";

export const login = async (data: LoginSchemaType) => {
  const res = await configAxios.post<Response<User>>("/auth/login", data);
  return res.data;
};

export const signup = async (data: SignupType) => {
  const res = await configAxios.post<Response<User>>("/auth/signup", data);
  return res.data;
};

export const verify = async (id: string, token: string) => {
  const res = await configAxios.get<Response>(`/auth/verify/${id}/${token}`);
  return res.data;
};
