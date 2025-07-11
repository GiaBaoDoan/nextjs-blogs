import CustomError from "@/lib/cutomError";
import connect from "@/lib/database";
import Token from "@/models/Token";
import User from "@/models/User";

import { withErrorHandler } from "@/lib/errorHandler";
import { findToken } from "@/lib/token";
import { NextResponse } from "next/server";

async function getHandler(
  _: Request,
  { params }: { params: Promise<{ id: string; token: string }> }
) {
  await connect();

  const { id, token } = await params;
  const user = await User.findById(id);

  if (!user) {
    throw new CustomError("Token không hợp lệ hoặc đã hết hạn !!", 401);
  }

  const existToken = await findToken({ userId: id, token });

  await User.findByIdAndUpdate(user._id, { isVerified: true }, { new: true });

  await Token.findByIdAndDelete(existToken._id);

  return NextResponse.json(
    {
      message: "Email của bạn đã được xác minh !!",
    },
    { status: 200 }
  );
}

export const GET = withErrorHandler(getHandler);
