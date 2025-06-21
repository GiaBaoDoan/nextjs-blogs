import connect from "@/lib/database";
import UserModel from "@/models/User";
import CustomError from "@/lib/cutomError";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { withErrorHandler } from "@/lib/errorHandler";
import { uploadToCloudinary } from "@/lib/upload";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

const postHandler = async (request: NextRequest) => {
  await connect();

  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    throw new CustomError("Không có quyền", 401);
  }

  const { image } = await request.json();

  const uploadedImage = await uploadToCloudinary(image);

  await UserModel.findOneAndUpdate(
    { email: session.user.email },
    {
      image: uploadedImage,
    },
    { new: true }
  );

  return NextResponse.json(
    { message: "Cập nhật ảnh thành công" },
    { status: 200 }
  );
};

export const POST = withErrorHandler(postHandler);
