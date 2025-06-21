import configAxios from "@/lib/axios";
import { BlogSchemaType } from "@/schema/blog.schema";
import { Response } from "@/types";
import { Blog } from "@/types/blog.type";

const BlogServices = {
  get: (params?: any) =>
    configAxios.get<Response<Blog[]>>("/blogs", { params }),

  post: (data: BlogSchemaType) => configAxios.post<Response>("/blogs", data),

  getById: (id: string) => configAxios.get<Response<Blog>>(`/blogs/${id}`),

  delete: (id: string) => configAxios.delete<Response>(`/blogs/${id}`),

  put: (id: string, data: BlogSchemaType) =>
    configAxios.put<Response>(`/blogs/${id}`, data),
};

export default BlogServices;
