import { z } from "zod";

export const UserFormSchema = z.object({
  email: z.string().email({ message: "Email không hợp lệ" }),
  password: z
    .string()
    .min(6, { message: "Mật khẩu phải ít nhất 6 ký tự" })
    .optional(),
  username: z.string().min(1, { message: "Tên người dùng là bắt buộc" }),
  isAdmin: z.boolean().optional(),
  status: z.boolean().optional(),
  bio: z.string().max(200).optional(),
  address: z.string().optional(),
});

export type UserFormType = z.infer<typeof UserFormSchema>;

export const UserDefaultValues: UserFormType = {
  email: "",
  username: "",
  address: "",
  bio: "",
  password: "",
  isAdmin: true,
  status: true,
};

export default UserFormSchema;
