import configAxios from "@/lib/axios";
import { BlogSchemaType } from "@/schema/blog.schema";
import { Response } from "@/types";
import { Blog } from "@/types/blog.type";

// Lấy danh sách post
export const getPosts = async (params: any) => {
  try {
    const res = await configAxios.get<Response<Blog[]>>("/blogs", { params });
    return res.data;
  } catch (err: any) {
    throw new Error(err.response.data.message || "Đã có lỗi xảy ra");
  }
};

// Đọc post
export const getPostById = async (id: string) => {
  try {
    const res = await configAxios.get<Response<Blog>>(`/blogs/${id}`);
    return res.data;
  } catch (err: any) {
    throw new Error(err.response.data.message || "Đã có lỗi xảy ra");
  }
};

// Tạo post mới
export const createPost = async (data: BlogSchemaType) => {
  try {
    const res = await configAxios.post("/blogs", data);
    return res.data;
  } catch (err: any) {
    throw new Error(err.response.data.message || "Đã có lỗi xảy ra");
  }
};

//  Cập nhật post
export const updatePost = async (id: string, data: BlogSchemaType) => {
  try {
    const res = await configAxios.put(`/blogs/${id}`, data);
    return res.data;
  } catch (err: any) {
    throw new Error(err.response.data.message || "Đã có lỗi xảy ra");
  }
};

// Xóa posts
export const deletePost = async (id: string) => {
  try {
    const res = await configAxios.delete(`/blogs/${id}`);
    return res.data;
  } catch (err: any) {
    throw new Error(err.response.data.message || "Đã có lỗi xảy ra");
  }
};
