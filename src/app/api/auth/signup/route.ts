import { signup } from "@/lib/auth";
import { sendEmail } from "@/lib/email";
import { withErrorHandler } from "@/lib/errorHandler";
import { createHashToken } from "@/lib/token";
import { User } from "@/types/user.type";
import connect from "@/lib/database";
import { NextRequest, NextResponse } from "next/server";

connect();

async function postHandler(request: NextRequest) {
  const body = await request.json();

  const user = (await signup(body)) as User;

  const token = await createHashToken(user._id);

  const link = `http://localhost:3000/auth/verify/${user._id}/${token}`;

  await sendEmail({ email: user.email, link });

  return NextResponse.json(
    {
      message: "Vui lòng kiểm tra email !!",
    },
    {
      status: 201,
    }
  );
}

export const POST = withErrorHandler(postHandler);
