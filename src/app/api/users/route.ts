import connect from "@/lib/database";
import UserModel from "@/models/User";
import { withErrorHandler } from "@/lib/errorHandler";
import { NextRequest, NextResponse } from "next/server";

connect();

const getHandler = async (request: NextRequest) => {
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
