import configAxios from "@/lib/axios";
import { CategorySchemaType } from "@/schema/category.schema";
import { Response } from "@/types";
import { Category } from "@/types/category.type";

// Lấy danh sách tất cả category
export const getCategories = async () => {
  const res = await configAxios.get<Response<Category[]>>("/categories");
  return res.data;
};

// Lấy 1 category theo id
export const getCategory = async (id: string) => {
  const res = await configAxios.get<Response<Category>>(`/categories/${id}`);
  return res.data;
};

// Tạo mới category
export const createCategory = async (data: CategorySchemaType) => {
  const res = await configAxios.post<Response>("/categories", data);
  return res.data;
};

// Cập nhật category
export const updateCategory = async (id: string, data: CategorySchemaType) => {
  const res = await configAxios.put<Response>(`/categories/${id}`, data);
  return res.data;
};

// Xoá category
export const deleteCategory = async (id: string) => {
  const res = await configAxios.delete<Response>(`/categories/${id}`);
  return res.data;
};
