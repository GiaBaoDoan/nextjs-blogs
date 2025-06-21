import { CommentSchemaType } from "@/schema/comment.schema";

export interface Comment extends Omit<CommentSchemaType, "user"> {
  _id: string;
  blogId: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}
