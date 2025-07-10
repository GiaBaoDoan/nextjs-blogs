import CustomError from "@/lib/cutomError";
import connect from "@/lib/database";
import Token from "@/models/Token";
import UserModel from "@/models/User";

import { findToken } from "@/lib/token";
import { NextResponse } from "next/server";
import { withErrorHandler } from "@/lib/errorHandler";
import { hashPassword } from "@/lib/hash";

async function postHandler(
  req: Request,
  { params }: { params: Promise<{ id: string; token: string }> }
) {
  await connect();

  const { id, token } = await params;
  const { newPassword } = await req.json();

  const user = await UserModel.findById(id);

  if (!user) {
    throw new CustomError("Token không hợp lệ hoặc đã hết hạn !!", 401);
  }

  const existToken = await findToken({ userId: id, token });

  const hashedPassword = await hashPassword(newPassword);

  await UserModel.findByIdAndUpdate(
    user._id,
    { password: hashedPassword },
    { new: true }
  );

  await Token.findByIdAndDelete(existToken._id);

  return NextResponse.json(
    {
      message: "Mật khẩu của bạn đã được đặt lại !!",
    },
    { status: 200 }
  );
}

export const POST = withErrorHandler(postHandler);
