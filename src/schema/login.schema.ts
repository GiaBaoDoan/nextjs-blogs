import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const defaultValues = {
  email: "",
  password: "",
};
export type LoginSchemaType = z.infer<typeof LoginFormSchema>;
