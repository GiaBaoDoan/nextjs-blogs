import { withErrorHandler } from "@/lib/errorHandler";
import { CommentModel } from "@/models/Comment";
import { NextRequest, NextResponse } from "next/server";

import CustomError from "@/lib/cutomError";
import connect from "@/lib/database";

const deleteHandler = async (
  _: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      id: string;
      blogId: string;
    }>;
  }
) => {
  await connect();
  const { id } = await params;

  const comment = await CommentModel.findByIdAndDelete(id);
  if (!comment) throw new CustomError("Không tìm thấy bình luận!", 404);

  return NextResponse.json(
    { message: "Đã xóa một bình luận!" },
    { status: 200 }
  );
};

// blogId/id
export const DELETE = withErrorHandler(deleteHandler);
