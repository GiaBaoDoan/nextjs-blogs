import { CommentType } from "@/schema/comment.schema";

export interface Comment extends Omit<CommentType, "user"> {
  _id: string;
  blogId: string;
  user: {
    _id: string;
    username: string;
    image: string;
  };
  createdAt: string;
  updatedAt: string;
}
