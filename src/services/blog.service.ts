import configAxios from "@/lib/axios";
import { BlogSchemaType } from "@/schema/blog.schema";
import { Response } from "@/types";
import { Blog } from "@/types/blog.type";

export const getPosts = async (params: any) => {
  const res = await configAxios.get<Response<Blog[]>>("/blogs", { params });
  return res.data;
};
export const getPostById = async (id: string) => {
  const res = await configAxios.get<Response<Blog>>(`/blogs/${id}`);
  return res.data;
};
export const createPost = async (data: BlogSchemaType) => {
  const res = await configAxios.post("/blogs", data);
  return res.data;
};

export const updatePost = async (id: string, data: BlogSchemaType) => {
  const res = await configAxios.put(`/blogs/${id}`, data);
  return res.data;
};
export const deletePost = async (id: string) => {
  const res = await configAxios.delete(`/blogs/${id}`);
  return res.data;
};
