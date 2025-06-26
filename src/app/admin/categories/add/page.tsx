"use client";

import Back from "@/components/ui/back";
import CategoryForm from "@/components/categories/CategoryForm";

import { CategorySchemaType } from "@/schema/category.schema";
import { useCreateCategory } from "@/hooks/useCategories";
import SuccessToast from "@/components/custom/SuccessToast";

const CategoryAddPage = () => {
  const { mutate } = useCreateCategory();

  const onSubmit = (data: CategorySchemaType) => {
    mutate(data, {
      onSuccess: (res) => SuccessToast(res.message),
    });
  };

  return (
    <div className="container">
      <Back text="Thêm danh mục" />
      <CategoryForm onSubmit={onSubmit} isSubmiting={false} />
    </div>
  );
};

export default CategoryAddPage;
