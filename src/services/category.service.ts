import configAxios from "@/lib/axios";
import { CategorySchemaType } from "@/schema/category.schema";
import { Response } from "@/types";
import { Category } from "@/types/category.type";

const CategoryServices = {
  post: (data: CategorySchemaType) =>
    configAxios.post<Response>("/category", data),

  get: () => configAxios.get<Response<Category[]>>("/category"),

  getById: (id: string) =>
    configAxios.get<Response<Category>>(`/category/${id}`),

  delete: (id: string) => configAxios.delete<Response>(`/category/${id}`),

  put: (id: string, data: CategorySchemaType) =>
    configAxios.put<Response<Category>>(`/category/${id}`, data),
};

export default CategoryServices;
