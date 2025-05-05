import connect from "@/lib/database";
import { withErrorHandler } from "@/lib/errorHandler";
import { deleteUser, getUserById, updateUser } from "@/lib/user";
import { tParams } from "@/types";
import { NextRequest, NextResponse } from "next/server";

connect();

async function getHandler(_: NextRequest, { params }: { params: tParams }) {
  const { id } = await params;
  const user = await getUserById(id);

  return NextResponse.json(
    {
      message: "Lấy dữ liệu thành công !!",
      data: user,
    },
    { status: 200 }
  );
}

async function deleteHandler(_: NextRequest, { params }: { params: tParams }) {
  const { id } = await params;
  await deleteUser(id);

  return NextResponse.json(
    {
      message: "Xóa user thành công !!",
    },
    { status: 200 }
  );
}

async function putHandler(
  request: NextRequest,
  { params }: { params: tParams }
) {
  const { id } = await params;
  const body = await request.json();

  await updateUser(id, body);

  return NextResponse.json(
    {
      message: "Cập nhật user thành công",
    },
    { status: 200 }
  );
}

export const GET = withErrorHandler(getHandler);
export const PUT = withErrorHandler(putHandler);
export const DELETE = withErrorHandler(deleteHandler);
