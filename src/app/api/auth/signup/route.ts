import { signup } from "@/lib/auth";
import connect from "@/lib/database";
import { withErrorHandler } from "@/lib/errorHandler";
import { NextRequest, NextResponse } from "next/server";

connect();

async function postHandler(request: NextRequest) {
  const body = await request.json();

  await signup(body);

  return NextResponse.json(
    {
      message: "Đăng ký thành công !!",
    },
    {
      status: 201,
    }
  );
}

export const POST = withErrorHandler(postHandler);
