import CustomError from "@/lib/cutomError";
import { hashPassword } from "@/lib/hash";
import UserModel from "@/models/User";
import { UserFormType } from "@/schema/user.schema";

export async function getUserById(id: string) {
  const user = await UserModel.findById(id).select("-password");

  if (!user) throw new CustomError("User khong ton tai", 404);

  return user;
}

export async function deleteUser(id: string) {
  await getUserById(id);

  const user = await UserModel.findByIdAndDelete(id);
  return user;
}

export async function updateUser(id: string, body: UserFormType) {
  if (body.password) {
    body.password = await hashPassword(body.password);
  }

  const user = await UserModel.findByIdAndUpdate(id, body, {
    new: true,
  });

  return user;
}
