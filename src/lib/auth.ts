import CustomError from "@/lib/cutomError";
import UserModel from "@/models/User";
import { comparePassword, hashPassword } from "@/lib/hash";
import { LoginType } from "@/schema/login.schema";
import { SignupType } from "@/schema/signup.schema";

export async function login(body: LoginType) {
  const user = await UserModel.findOne({ email: body.email });

  if (!user) {
    throw new CustomError("Tài khoản hoặc mật khẩu không đúng", 400);
  }

  const isMatch = await comparePassword(body.password, user.password);

  if (!isMatch) {
    throw new CustomError("Tài khoản hoặc mật khẩu không đúng", 400);
  }

  return user;
}

export async function signup(body: SignupType) {
  const user = await UserModel.findOne({ email: body.email });

  if (user) {
    throw new CustomError("Email này đã được đăng ký !!", 400);
  }

  body.password = await hashPassword(body.password);

  await UserModel.create(body);

  return user;
}
