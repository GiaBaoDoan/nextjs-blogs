import { z } from "zod";

export const CommentSchema = z.object({
  content: z.string().min(9, "Nội dung quá ngắn"),
});

export type CommentType = z.infer<typeof CommentSchema>;

export const defaultValues: CommentType = {
  content: "",
};
