import UserModel from "@/models/User";
import CustomError from "@/lib/cutomError";

import { EmailType } from "@/constants/enum";
import { sendEmail } from "@/lib/email";
import { withErrorHandler } from "@/lib/errorHandler";
import { createHashToken } from "@/lib/token";
import { NextResponse } from "next/server";

async function postHandler(req: Request) {
  const { email } = await req.json();
  const user = await UserModel.findOne({ email });

  if (!user) {
    throw new CustomError("Email này không được đăng ký", 404);
  }

  const token = await createHashToken(user._id);

  await sendEmail({
    type: EmailType.RESET_PASSWORD,
    to: email,
    token,
    userId: user._id,
  });

  return NextResponse.json(
    { message: "Vui lòng kiểm tra email" },
    { status: 200 }
  );
}

export const POST = withErrorHandler(postHandler);
