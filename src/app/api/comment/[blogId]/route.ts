import { withErrorHandler } from "@/lib/errorHandler";
import { CommentModel } from "@/models/Comment";
import { NextRequest, NextResponse } from "next/server";

async function postHandler(
  request: NextRequest,
  { params }: { params: Promise<{ blogId: string }> }
) {
  const { blogId } = await params;

  const body = await request.json();

  const { content, email, username } = body;

  await CommentModel.create({
    content,
    blogId,
    email,
    username,
  });

  return NextResponse.json(
    {
      message: "Thêm bình luận thành công",
    },
    { status: 200 }
  );
}

export const POST = withErrorHandler(postHandler);
