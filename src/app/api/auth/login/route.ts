import CustomError from "@/lib/cutomError";
import connect from "@/lib/database";
import { withErrorHandler } from "@/lib/errorHandler";
import { comparePassword } from "@/lib/hash";
import UserModel from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

connect();

const login = async (request: NextRequest) => {
  const body = await request.json();
  const { email, password } = body;

  const user = await UserModel.findOne({ email });

  if (!user) {
    throw new CustomError("Tài khoản hoặc mật khẩu không đúng", 400);
  }

  const isMatch = await comparePassword(password, user.password);

  if (!isMatch) {
    throw new CustomError("Tài khoản hoặc mật khẩu không đúng", 400);
  }

  return NextResponse.json(
    {
      message: "Đăng nhập thành công",
    },
    {
      status: 200,
    }
  );
};

export const POST = withErrorHandler(login);
