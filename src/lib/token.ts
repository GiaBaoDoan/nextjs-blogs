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

export const findToken = async (userId: string, tokenValue: string) => {
  const token = await Token.findOne({
    userId,
    token: tokenValue,
  });

  if (!token) {
    throw new CustomError("Xác thực thất bại !!", 401);
  }

  return token;
};
