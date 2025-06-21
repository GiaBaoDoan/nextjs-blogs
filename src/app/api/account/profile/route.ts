import CustomError from "@/lib/cutomError";
import UserModel from "@/models/User";
import connect from "@/lib/database";

import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { withErrorHandler } from "@/lib/errorHandler";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

const putHandler = async (request: NextRequest) => {
  await connect();

  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    throw new CustomError("Không có quyền", 401);
  }

  const body = await request.json();

  await UserModel.findOneAndUpdate(
    { email: session.user.email },
    {
      ...body,
    },
    { new: true }
  );

  return NextResponse.json(
    { message: "Cập nhật profle thành công" },
    { status: 200 }
  );
};

export const PUT = withErrorHandler(putHandler);
