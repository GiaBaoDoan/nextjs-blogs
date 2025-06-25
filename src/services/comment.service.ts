import { CommentSchemaType } from "@/schema/comment.schema";
import { Response } from "@/types";
import configAxios from "@/lib/axios";
import { Comment } from "@/types/comment.type";

export const getCommentList = async (blogId: string) => {
  try {
    const res = await configAxios.get<Response<Comment[]>>(
      `/comment/${blogId}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const createComment = async (
  blogId: string,
  data: CommentSchemaType
) => {
  const res = await configAxios.post<Response>(`/comment/${blogId}`, data);
  return res.data;
};

export const deleteComment = async (id: string, blogId: string) => {
  const res = await configAxios.delete<Response>(`/comment/${blogId}/${id}`);
  return res.data;
};
