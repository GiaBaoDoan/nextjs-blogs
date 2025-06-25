import * as CategoryApi from "@/services/category.service";
import { CategorySchemaType } from "@/schema/category.schema";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// Lấy danh sách tất cả categories
export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: CategoryApi.getCategories,
  });
};

// Lấy 1 category theo id
export const useCategory = (id: string) => {
  return useQuery({
    queryKey: ["category", id],
    queryFn: () => CategoryApi.getCategory(id),
    enabled: !!id,
  });
};

// Tạo category mới
export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CategorySchemaType) => CategoryApi.createCategory(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
};

// Cập nhật category
export const useUpdateCategory = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CategorySchemaType) =>
      CategoryApi.updateCategory(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
};

// Xoá category
export const useDeleteCategory = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => CategoryApi.deleteCategory(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });
};
