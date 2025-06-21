import { withErrorHandler } from "@/lib/errorHandler";
import { CommentModel } from "@/models/Comment";
import { NextRequest, NextResponse } from "next/server";

async function getHandler(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const queries = Object.fromEntries(searchParams.entries());

  const { blogId } = queries;

  const filter: any = {};
  if (blogId) {
    filter.blogId = blogId;
  }

  const comments = await CommentModel.find(filter).sort({ createdAt: -1 });

  return NextResponse.json(
    {
      data: comments,
    },
    {
      status: 200,
    }
  );
}

export const GET = withErrorHandler(getHandler);
