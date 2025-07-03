import BlogLike from "@/models/BlogLike";
import connect from "@/lib/database";
import CustomError from "@/lib/cutomError";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { withErrorHandler } from "@/lib/errorHandler";
import { getSession } from "next-auth/react";

// Cập nhật trạng thái like/not-like cho bài viết
async function putHandler(
  _: NextRequest,
  { params }: { params: Promise<{ blogId: string }> }
) {
  await connect();
  const session = await getServerSession(authOptions);
  if (!session) throw new CustomError("Vui lòng đăng nhập", 401);

  const { blogId } = await params;
  const userId = session.user.id;

  // xoá trước (unlike). Nếu chưa có thì thêm (like).
  const deleted = await BlogLike.findOneAndDelete({
    blog: blogId,
    user: userId,
  });

  // Nếu chưa xóa thì tạo mới
  if (!deleted) {
    await BlogLike.create({ blog: blogId, user: userId });
  }

  console.log(deleted);

  return NextResponse.json(
    { message: "Bạn đã thích bài viết" },
    {
      status: 200,
    }
  );
}

async function getHandler(
  _req: NextRequest,
  { params }: { params: Promise<{ blogId: string }> }
) {
  await connect();

  const session = await getServerSession(authOptions);
  const { blogId } = await params;

  // Tổng số like
  let liked = false;
  const likes = await BlogLike.countDocuments({ blog: blogId });

  // Người dùng hiện tại đã like chưa?
  if (session) {
    const likedDoc = await BlogLike.exists({
      blog: blogId,
      user: session.user.id,
    });

    liked = !!likedDoc;
  }

  return NextResponse.json({ data: { likes, liked } }, { status: 200 });
}
export const GET = withErrorHandler(getHandler);
export const PUT = withErrorHandler(putHandler);
