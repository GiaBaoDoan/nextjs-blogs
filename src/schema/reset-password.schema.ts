import { z } from "zod";

export const ResetPasswordSchema = z
  .object({
    newPassword: z.string().min(8, "Mật khẩu phải có ít nhất 8 ký tự"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Mật khẩu xác nhận không khớp",
    path: ["confirmPassword"], // chỉ định lỗi nằm ở trường này
  });

export type ResetPasswordSchemaType = z.infer<typeof ResetPasswordSchema>;

export const defaultValues: ResetPasswordSchemaType = {
  newPassword: "",
  confirmPassword: "",
};
