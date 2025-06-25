import { AvatarFormType } from "@/schema/avatar.schema";
import { Response } from "@/types";
import { User } from "@/types/user.type";
import { SecuritySchemaType } from "@/schema/security.schema";
import { ProfileType } from "@/schema/profile.schema";
import configAxios from "@/lib/axios";

export const updateAvatar = async (data: AvatarFormType) => {
  const res = await configAxios.post<Response>("/account/avatar", data);
  return res.data;
};

export const updateProfile = async (data: ProfileType) => {
  const res = await configAxios.put<Response>("/account/profile", data);
  return res.data;
};

export const updatePassword = async (data: SecuritySchemaType) => {
  const res = await configAxios.put<Response>("/account/security", data);
  return res.data;
};

export const getAccount = async () => {
  const res = await configAxios.get<Response<User>>("/account");
  return res.data;
};
