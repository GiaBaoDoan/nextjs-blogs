import { z } from "zod";

export const profileFormSchema = z.object({
  username: z.string().min(2).max(50),
  phone: z.string().min(9),
});

export const defaultValues = {
  username: "",
  phone: "",
};

export type ProfileType = z.infer<typeof profileFormSchema>;
