import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { withErrorHandler } from "@/lib/errorHandler";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { comparePassword, hashPassword } from "@/lib/hash";
import CustomError from "@/lib/cutomError";
import UserModel from "@/models/User";

async function putHandler(request: NextRequest) {
  const { currentPassword, newPassword } = await request.json();

  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    throw new CustomError("Không có quyền", 401);
  }

  const account = await UserModel.findOne({ email: session.user.email });

  if (!account) {
    throw new CustomError("Không tìm thấy user", 404);
  }

  const check = await comparePassword(currentPassword, account.password);

  if (!check) {
    throw new CustomError("Mật khẩu cũ không khớp", 404);
  }

  const hashedPassword = await hashPassword(newPassword);

  await UserModel.findOneAndUpdate(
    { email: session.user.email },
    {
      password: hashedPassword,
    },
    { new: true }
  );

  return NextResponse.json(
    { message: "Cập nhật mật khẩu thành công" },
    { status: 200 }
  );
}

export const PUT = withErrorHandler(putHandler);
