import connect from "@/lib/database";
import UserModel from "@/models/User";
import { withErrorHandler } from "@/lib/errorHandler";
import { NextRequest, NextResponse } from "next/server";

const getHandler = async (_: NextRequest) => {
  await connect();
  const users = await UserModel.find().select("-password");

  return NextResponse.json(
    {
      message: "Lấy dữ liệu thành công",
      data: users,
    },
    { status: 200 }
  );
};

export const GET = withErrorHandler(getHandler);
