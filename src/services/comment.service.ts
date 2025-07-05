import configAxios from "@/lib/axios";
import { Response } from "@/types";
import { Comment } from "@/types/comment.type";
import { CommentType } from "@/schema/comment.schema";

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

export const createComment = async (blogId: string, data: CommentType) => {
  try {
    const res = await configAxios.post<Response>(`/comment/${blogId}`, data);
    return res.data;
  } catch (err: any) {
    throw new Error(err?.response?.data.message || "");
  }
};

export const deleteComment = async (blogId: string, id: string) => {
  const res = await configAxios.delete<Response>(`/comment/${blogId}/${id}`);
  return res.data;
};

export const updateComment = async (
  blogId: string,
  id: string,
  data: CommentType
) => {
  const res = await configAxios.put<Response>(`/comment/${blogId}/${id}`, data);
  return res.data;
};
