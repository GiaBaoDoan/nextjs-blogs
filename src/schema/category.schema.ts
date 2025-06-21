import { z } from "zod";

export const CategoryFormSchema = z.object({
  name: z.string().min(1).max(50),
  slug: z.string().min(1),
});

export type CategorySchemaType = z.infer<typeof CategoryFormSchema>;

export const CategoryDefaultValues: CategorySchemaType = {
  name: "",
  slug: "",
};
