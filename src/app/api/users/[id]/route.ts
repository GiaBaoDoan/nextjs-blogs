import connect from "@/lib/database";
import { withErrorHandler } from "@/lib/errorHandler";
import UserModel from "@/models/User";
import { tParams } from "@/types";
import { NextRequest, NextResponse } from "next/server";

connect();

async function getUserById(
  request: NextRequest,
  { params }: { params: tParams }
) {
  const { id } = await params;
  const user = await UserModel.findById(id).select("-password");

  return NextResponse.json(
    {
      message: "Lấy dữ liệu thành công !!",
      data: user,
    },
    { status: 200 }
  );
}

async function updateUser(
  request: NextRequest,
  { params }: { params: tParams }
) {
  const body = request.json();

  const { id } = await params;

  await UserModel.findByIdAndUpdate(id, body, {
    new: true,
  });

  return NextResponse.json(
    {
      message: "Đã cập nhật user !!",
    },
    { status: 200 }
  );
}

async function deleteUser(
  request: NextRequest,
  { params }: { params: tParams }
) {
  const { id } = await params;
  await UserModel.findByIdAndUpdate(id);

  return NextResponse.json(
    {
      message: "Xóa user thành công !!",
    },
    { status: 200 }
  );
}

export const GET = withErrorHandler(getUserById);
export const PUT = withErrorHandler(updateUser);
export const DELETE = withErrorHandler(deleteUser);
