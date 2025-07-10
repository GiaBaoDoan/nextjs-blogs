import { signup } from "@/lib/auth";
import { sendEmail } from "@/lib/email";
import { withErrorHandler } from "@/lib/errorHandler";
import { createHashToken } from "@/lib/token";
import { User } from "@/types/user.type";
import { NextRequest, NextResponse } from "next/server";
import { EmailType } from "@/constants/enum";

import connect from "@/lib/database";

connect();

async function postHandler(request: NextRequest) {
  const body = await request.json();

  const user = (await signup(body)) as User;

  const token = await createHashToken(user._id);

  await sendEmail({
    to: user.email,
    type: EmailType.VERIFY,
    token,
    userId: user._id,
  });

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
