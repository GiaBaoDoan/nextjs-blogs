import connect from "@/lib/database";
import TagModel from "@/models/Tags";
import { withErrorHandler } from "@/lib/errorHandler";
import { NextRequest, NextResponse } from "next/server";

const postHandler = async (request: NextRequest) => {
  await connect();
  const body = await request.json();

  await TagModel.create(body);

  return NextResponse.json(
    {
      message: "Đã tạo tag mới!",
    },
    { status: 201 }
  );
};

const getHandler = async () => {
  await connect();
  const tags = await TagModel.find();
  return NextResponse.json(
    {
      message: "Lấy danh sách tag thành công!",
      data: tags,
    },
    { status: 200 }
  );
};

export const POST = withErrorHandler(postHandler);
export const GET = withErrorHandler(getHandler);
