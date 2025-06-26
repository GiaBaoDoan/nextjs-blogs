import configAxios from "@/lib/axios";
import { LoginSchemaType } from "@/schema/login.schema";
import { SignupType } from "@/schema/signup.schema";
import { Response } from "@/types";
import { signIn } from "next-auth/react";

export const login = async (data: LoginSchemaType) => {
  const res = await signIn("credentials", {
    ...data,
    redirect: false,
  });

  if (!res || !res.ok) {
    throw new Error(res?.error || " Đăng nhập thất bại");
  }
};

export const signup = async (data: SignupType) => {
  try {
    const res = await configAxios.post<Response>("/auth/signup", data);
    return res.data;
  } catch (err: any) {
    throw new Error(err.response.data.message || "Đăng ký thất bại");
  }
};

export const verify = async (id: string, token: string) => {
  try {
    const res = await configAxios.get<Response>(`/auth/verify/${id}/${token}`);
    return res.data;
  } catch (err: any) {
    throw new Error(err.response.data.message || "Xác thực thất bại");
  }
};
