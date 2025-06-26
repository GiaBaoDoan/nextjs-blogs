import connect from "@/lib/database";
import { withErrorHandler } from "@/lib/errorHandler";
import { CommentModel } from "@/models/Comment";
import { NextRequest, NextResponse } from "next/server";

async function getHandler(
  _: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      blogId: string;
    }>;
  }
) {
  await connect();
  const { blogId } = await params;

  const comments = await CommentModel.find({ blogId });

  return NextResponse.json(
    {
      data: comments,
    },
    {
      status: 200,
    }
  );
}

async function postHandler(
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      blogId: string;
    }>;
  }
) {
  await connect();
  const { blogId } = await params;
  const data = await request.json();

  await CommentModel.create({
    ...data,
    blogId,
  });

  return NextResponse.json(
    {
      message: "Đã thêm mới bình luận",
    },
    {
      status: 200,
    }
  );
}

export const GET = withErrorHandler(getHandler);
export const POST = withErrorHandler(postHandler);
