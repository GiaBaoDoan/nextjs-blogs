import { z } from "zod";

export const BlogFormSchema = z.object({
  title: z.string().min(3),
  slug: z.string().min(3).toLowerCase(),
  description: z.string().min(10),
  seoDescription: z.string().optional(),
  seoKeyWord: z.string().optional(),
  content: z.string().min(10),
  thumbnail: z.string().min(1),
  category: z.string().min(1),
  tags: z.array(z.string()).optional(),
  status: z.enum(["draft", "published"]),
});

export const BlogDefaultValues: BlogSchemaType = {
  title: "",
  slug: "",
  description: "",
  seoDescription: "",
  seoKeyWord: "",
  content: "",
  thumbnail: "",
  category: "",
  tags: [],
  status: "draft",
};

export type BlogSchemaType = z.infer<typeof BlogFormSchema>;
