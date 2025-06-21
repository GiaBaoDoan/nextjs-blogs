import { CommentSchemaType } from "@/schema/comment.schema";
import { Response } from "@/types";
import configAxios from "@/lib/axios";

const CommentServices = {
  get: (params: any) =>
    configAxios.get<Response<Comment[]>>(`/comment/`, { params }),

  post: (blogId: string, data: CommentSchemaType) =>
    configAxios.post<Response>(`/comment/${blogId}`, data),

  delete: (blogId: string, id: string) =>
    configAxios.delete<Response>(`/comment/${blogId}/${id}`),
};

export default CommentServices;
