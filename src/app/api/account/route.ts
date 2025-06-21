import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { withErrorHandler } from "@/lib/errorHandler";

import connect from "@/lib/database";
import UserModel from "@/models/User";

async function getHandler() {
  await connect();
  const session = await getServerSession(authOptions);

  const user = await UserModel.findOne({ email: session?.user?.email }).select(
    "-password -__v"
  );

  return NextResponse.json(
    {
      message: "Lấy dữ liệu thành công",
      data: user,
    },
    { status: 200 }
  );
}

export const GET = withErrorHandler(getHandler);
