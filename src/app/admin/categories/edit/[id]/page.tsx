"use client";

import CategoryForm from "@/components/categories/CategoryForm";
import Back from "@/components/ui/back";

import { CategorySchemaType } from "@/schema/category.schema";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { Category } from "@/types/category.type";
import { useCategory, useUpdateCategory } from "@/hooks/useCategories";

const CategoryEditPage = () => {
  const { id } = useParams();

  const updateCategory = useUpdateCategory(id as string);

  const { data } = useCategory(id as string);

  const onSubmit = (data: CategorySchemaType) => updateCategory.mutate(data);

  return (
    <div className="container">
      <Back text="Edit danh mục" />
      <CategoryForm
        category={data?.data as Category}
        onSubmit={onSubmit}
        isSubmiting={false}
      />
    </div>
  );
};

export default CategoryEditPage;
