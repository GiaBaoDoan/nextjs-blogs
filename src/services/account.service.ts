import { AvatarFormType } from "@/components/account/AvatarForm";
import { ProfileType } from "@/components/account/ProfileForm";
import { Response } from "@/types";
import { User } from "@/types/user.type";
import { SecuritySchemaType } from "@/components/account/SecurityForm";
import configAxios from "@/lib/axios";

const AccountServices = {
  updateAvatar: (data: AvatarFormType) =>
    configAxios.post<Response>("/account/avatar", data),
  updateProfile: (data: ProfileType) =>
    configAxios.put<Response>("/account/profile", data),
  updatePassword: (data: SecuritySchemaType) =>
    configAxios.put<Response>("/account/security", data),
  getAccount: () => configAxios.get<Response<User>>("/account"),
};

export default AccountServices;
