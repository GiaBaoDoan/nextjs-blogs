import { z } from "zod";

export const SecurityFormSchema = z
  .object({
    currentPassword: z.string().min(6),
    newPassword: z.string().min(6, "Mật khẩu mới phải có ít nhất 6 ký tự"),
    repeatPassword: z.string().min(6),
  })
  .refine((data) => data.newPassword === data.repeatPassword, {
    path: ["repeatPassword"],
    message: "Mật khẩu nhập lại không khớp",
  });

export type SecuritySchemaType = z.infer<typeof SecurityFormSchema>;
