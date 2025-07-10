import CustomError from "@/lib/cutomError";
import Token from "@/models/Token";
import crypto from "crypto";

export const createHashToken = async (userId: string) => {
  const data = await new Token({
    userId,
    token: crypto.randomBytes(32).toString("hex"),
  }).save();

  return data.token;
};

export const findToken = async ({
  userId,
  token,
}: {
  userId: string;
  token: string;
}) => {
  try {
    const existToken = await Token.findOne({
      userId,
      token,
    });

    if (!existToken) {
      throw new CustomError("Token đã hết hạn hoặc không đúng", 401);
    }
    return existToken;
  } catch (err) {
    throw new Error("Token đã hết hạn hoặc không đúng");
  }
};
