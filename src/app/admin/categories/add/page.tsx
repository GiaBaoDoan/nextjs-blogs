"use client";

import Back from "@/components/ui/back";
import CategoryForm from "@/components/categories/CategoryForm";

import { CategorySchemaType } from "@/schema/category.schema";
import { useCreateCategory } from "@/hooks/useCategories";

const CategoryAddPage = () => {
  const createCategory = useCreateCategory();

  const onAddData = (data: CategorySchemaType) => createCategory.mutate(data);

  return (
    <div className="container">
      <Back text="Thêm danh mục" />
      <CategoryForm onSubmit={onAddData} isSubmiting={false} />
    </div>
  );
};

export default CategoryAddPage;
