import { z } from "zod";

const SignupFormSchema = z.object({
  email: z.string().email({
    message: "Email không hợp lệ",
  }),
  username: z.string().min(6, "Tên ít nhất 6 ký tự"),
  password: z.string().min(6, "Mật khẩu có tối thiểu 6 ký tự"),
});

export type SignupType = z.infer<typeof SignupFormSchema>;

export default SignupFormSchema;
