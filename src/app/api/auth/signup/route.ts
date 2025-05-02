import CustomError from "@/lib/cutomError";
import connect from "@/lib/database";
import { withErrorHandler } from "@/lib/errorHandler";
import { hashPassword } from "@/lib/hash";
import UserModel from "@/models/User";
import { SignupType } from "@/schema/signup.schema";
import { NextRequest, NextResponse } from "next/server";

connect();

async function signup(request: NextRequest) {
  const body = (await request.json()) as SignupType;
  const { email, username, password } = body;

  const user = await UserModel.findOne({ email });

  if (user) {
    throw new CustomError("Email này đã được đăng ký !!", 400);
  }

  const hashedPasswpord = await hashPassword(password);

  await UserModel.create({
    email,
    username,
    password: hashedPasswpord,
  });

  return NextResponse.json(
    {
      message: "Đăng ký thành công !!",
    },
    {
      status: 201,
    }
  );
}

export const POST = withErrorHandler(signup);
