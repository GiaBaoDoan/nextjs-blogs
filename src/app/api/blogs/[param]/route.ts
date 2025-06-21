import { withErrorHandler } from "@/lib/errorHandler";
import { tParams } from "@/types";
import { NextRequest, NextResponse } from "next/server";

import "@/models/Category";
import "@/models/Tags";
import connect from "@/lib/database";
import BlogModel from "@/models/Blog";
import Blog from "@/models/Blog";
import CustomError from "@/lib/cutomError";
import { isObjectId } from "@/constants/regex";

const getHandler = async (_: NextRequest, { params }: { params: tParams }) => {
  await connect();
  const { param } = await params;

  let query = isObjectId.test(param)
    ? Blog.findById(param)
    : Blog.findOne({ slug: param });

  const blog = await query.populate("category").populate("tags");

  if (!blog) throw new CustomError("Không tìm thấy bài viết!", 404);

  return NextResponse.json(
    {
      message: "Lấy bài viết thành công",
      data: blog,
    },
    { status: 200 }
  );
};

const putHandler = async (
  request: NextRequest,
  { params }: { params: tParams }
) => {
  await connect();
  const { param } = await params;
  const body = await request.json();

  await BlogModel.findByIdAndUpdate(param, body, { new: true });

  return NextResponse.json(
    {
      message: "Cập nhật bài viết thành công",
    },
    { status: 200 }
  );
};

const deleteHandler = async (
  _: NextRequest,
  { params }: { params: tParams }
) => {
  await connect();
  const { param } = await params;

  const blog = await BlogModel.findByIdAndDelete(param);
  if (!blog) throw new CustomError("Không tìm thấy bài viết!", 404);

  return NextResponse.json(
    { message: "Xoá bài viết thành công!" },
    { status: 200 }
  );
};

export const GET = withErrorHandler(getHandler);
export const PUT = withErrorHandler(putHandler);
export const DELETE = withErrorHandler(deleteHandler);
