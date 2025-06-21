import { isObjectId } from "@/constants/regex";
import CustomError from "@/lib/cutomError";
import connect from "@/lib/database";
import { withErrorHandler } from "@/lib/errorHandler";
import TagModel from "@/models/Tags";
import { tParams } from "@/types";
import { NextRequest, NextResponse } from "next/server";

connect();

const getHandler = async (_: NextRequest, { params }: { params: tParams }) => {
  const { param } = await params;

  const tag = isObjectId.test(param)
    ? await TagModel.findById(param)
    : await TagModel.findOne({ slug: param });

  if (!tag) {
    throw new CustomError("Không tìm thấy tag !!", 404);
  }

  return NextResponse.json(
    {
      message: "Lấy dữ liệu tag thành công!",
      data: tag,
    },
    { status: 200 }
  );
};

const putHandler = async (
  request: NextRequest,
  { params }: { params: tParams }
) => {
  const { param } = await params;
  const body = await request.json();

  const tag = await TagModel.findByIdAndUpdate(param, body, { new: true });

  if (!tag) {
    throw new CustomError("Không tìm thấy tag để cập nhật !!", 404);
  }

  return NextResponse.json(
    {
      message: "Cập nhật tag thành công!",
    },
    { status: 200 }
  );
};

const deleteHandler = async (
  _: NextRequest,
  { params }: { params: tParams }
) => {
  const { param } = await params;

  const tag = await TagModel.findByIdAndDelete(param);

  if (!tag) {
    throw new CustomError("Không tìm thấy tag để xóa !!", 404);
  }

  return NextResponse.json(
    {
      message: "Xóa tag thành công!",
    },
    { status: 200 }
  );
};

export const GET = withErrorHandler(getHandler);
export const PUT = withErrorHandler(putHandler);
export const DELETE = withErrorHandler(deleteHandler);
