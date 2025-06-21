import { z } from "zod";

export const SignupFormSchema = z.object({
  email: z.string().email(),
  username: z.string().min(6),
  password: z.string().min(6),
});

export type SignupType = z.infer<typeof SignupFormSchema>;

export default SignupFormSchema;
