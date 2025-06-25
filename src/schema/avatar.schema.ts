import { z } from "zod";

export const AvatarForm = z.object({
  image: z.string().min(1),
});

export const defaultValues = {
  image: "",
};

export type AvatarFormType = z.infer<typeof AvatarForm>;
