import { NextRequest, NextResponse } from "next/server";
import { login } from "@/lib/auth";
import { withErrorHandler } from "@/lib/errorHandler";
import connect from "@/lib/database";

connect();

const postHandler = async (request: NextRequest) => {
  const body = await request.json();
  const user = await login(body);

  return NextResponse.json(
    { message: "Đăng nhập thành công !!", data: user },
    { status: 200 }
  );
};

export const POST = withErrorHandler(postHandler);
