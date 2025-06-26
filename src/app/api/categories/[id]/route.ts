import CustomError from "@/lib/cutomError";
import connect from "@/lib/database";
import CategoryModel from "@/models/Category";
import { withErrorHandler } from "@/lib/errorHandler";
import { NextRequest, NextResponse } from "next/server";

connect();

const getHandler = async (
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;
  const category = await CategoryModel.findById(id);

  if (!category) {
    throw new CustomError("Không tìm thấy danh mục !!", 404);
  }

  return NextResponse.json(
    {
      message: "Lấy dữ liệu thành công !",
      data: category,
    },
    { status: 200 }
  );
};

const putHandler = async (
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;
  const body = await request.json();
  const category = await CategoryModel.findByIdAndUpdate(id, body, {
    new: true,
  });
  return NextResponse.json(
    {
      message: "Cập nhật thành công !",
      data: category,
    },
    { status: 200 }
  );
};

const deleteHandler = async (
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;

  const category = await CategoryModel.findByIdAndDelete(id);

  if (!category) {
    throw new CustomError("Không tìm thấy danh mục !!", 404);
  }

  return NextResponse.json(
    {
      message: "Xóa danh mục thành công !",
    },
    { status: 200 }
  );
};

export const GET = withErrorHandler(getHandler);
export const PUT = withErrorHandler(putHandler);
export const DELETE = withErrorHandler(deleteHandler);
