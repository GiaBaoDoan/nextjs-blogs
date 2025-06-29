import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import CustomError from "@/lib/cutomError";
import connect from "@/lib/database";
import { withErrorHandler } from "@/lib/errorHandler";
import { CommentModel } from "@/models/Comment";
import UserModel from "@/models/User";
import { getServerSession } from "next-auth";
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

  const comments = await CommentModel.find({ blogId })
    .sort({ createdAt: -1 })
    .populate("user", "username image");

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

  const session = await getServerSession(authOptions);
  if (!session) throw new CustomError("Bạn chưa đăng nhập", 401);

  const data = await request.json();

  const user = await UserModel.findOne({ email: session?.user?.email });
  if (!user) throw new CustomError("Không tìm thấy user", 404);

  await CommentModel.create({
    ...data,
    user: user.id,
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
