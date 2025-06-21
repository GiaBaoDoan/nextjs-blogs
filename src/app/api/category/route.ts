import connect from "@/lib/database";
import CategoryModel from "@/models/Category";
import { withErrorHandler } from "@/lib/errorHandler";
import { NextRequest, NextResponse } from "next/server";

const postHandler = async (request: NextRequest) => {
  await connect();
  const body = await request.json();

  await CategoryModel.create(body);

  return NextResponse.json(
    {
      message: "Đã tạo danh mục mới !!",
    },
    { status: 201 }
  );
};

const getHandler = async () => {
  await connect();
  const categories = await CategoryModel.find();
  return NextResponse.json(
    {
      message: "Lấy dữ liệu thành công !",
      data: categories,
    },
    { status: 200 }
  );
};

export const POST = withErrorHandler(postHandler);
export const GET = withErrorHandler(getHandler);
