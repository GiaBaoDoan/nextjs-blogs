import { z } from "zod";

export const TagFormSchema = z.object({
  name: z.string().min(1).max(50),
  slug: z.string().min(1),
});

export type TagSchemaType = z.infer<typeof TagFormSchema>;

export const TagDefaultValues: TagSchemaType = {
  name: "",
  slug: "",
};
