import { withErrorHandler } from "@/lib/errorHandler";
import { CommentModel } from "@/models/Comment";
import { NextRequest, NextResponse } from "next/server";

import CustomError from "@/lib/cutomError";
import connect from "@/lib/database";
import Blog from "@/models/Blog";

const deleteHandler = async (
  _: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      blogId: string;
      id: string;
    }>;
  }
) => {
  await connect();
  const { blogId, id } = await params;

  const blog = await Blog.findById(blogId);

  if (!blog) throw new CustomError("Không tìm thấy bài viết!", 404);

  const comment = await CommentModel.findByIdAndDelete(id);
  if (!comment) throw new CustomError("Không tìm thấy bình luận!", 404);

  return NextResponse.json(
    { message: "Đã xóa một bình luận!" },
    { status: 200 }
  );
};

// blogId/id
export const DELETE = withErrorHandler(deleteHandler);
