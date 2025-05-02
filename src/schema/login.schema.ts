import { z } from "zod";

const LoginFormSchema = z.object({
  email: z.string().email({
    message: "Email không hợp lệ",
  }),
  password: z.string().min(6, "Mật khẩu có tối thiểu 6 ký tự"),
});

export type LoginType = z.infer<typeof LoginFormSchema>;

export default LoginFormSchema;
