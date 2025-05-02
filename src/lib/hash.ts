import { genSaltSync, hashSync, compare } from "bcrypt-ts";

const salt = genSaltSync(10);

export const hashPassword = async (text: string) => {
  const result = hashSync(text, salt);
  return result;
};

export const comparePassword = async (password: string, hash: string) => {
  const isMatch = await compare(password, hash); // true;
  return isMatch;
};
