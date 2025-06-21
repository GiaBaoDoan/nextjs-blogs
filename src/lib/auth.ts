import CustomError from "@/lib/cutomError";
import UserModel from "@/models/User";
import { comparePassword, hashPassword } from "@/lib/hash";
import { LoginSchemaType } from "@/schema/login.schema";
import { SignupType } from "@/schema/signup.schema";

export async function login(body: LoginSchemaType) {
  const user = await UserModel.findOne({ email: body.email });

  if (!user || !user.isVerified) {
    throw new CustomError("Tài khoản hoặc mật khẩu không đúng", 400);
  }

  const isMatch = await comparePassword(body.password, user.password);

  if (!isMatch || !user.isVerified) {
    throw new CustomError("Tài khoản hoặc mật khẩu không đúng", 400);
  }

  return user;
}

export async function signup(body: SignupType) {
  const checkExistingEmail = await UserModel.findOne({ email: body.email });

  if (checkExistingEmail) {
    throw new CustomError("Email này đã được đăng ký !!", 400);
  }

  body.password = await hashPassword(body.password);

  const user = await UserModel.create(body);
  console.log(user);

  return user;
}
