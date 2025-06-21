import { z } from "zod";

export const CommentFormSchema = z.object({
  content: z.string().min(9),
  email: z.string().email(),
  username: z.string().min(3),
});

export type CommentSchemaType = z.infer<typeof CommentFormSchema>;
