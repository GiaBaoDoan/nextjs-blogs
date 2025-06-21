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
    throw new CustomError("Xác thực thất bại", 401);
  }

  const dataToken = await findToken(id, token);

  await User.findByIdAndUpdate(user._id, { isVerified: true }, { new: true });

  await Token.findByIdAndDelete(dataToken._id);

  return NextResponse.json(
    {
      message: "Email đã được nhận !!",
    },
    { status: 200 }
  );
}

export const GET = withErrorHandler(getHandler);
