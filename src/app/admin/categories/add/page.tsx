"use client";

import useAsyncAction from "@/hooks/useAction";
import Back from "@/components/ui/back";
import CategoryForm from "@/components/categories/CategoryForm";

import { CategorySchemaType } from "@/schema/category.schema";
import { postCategory } from "@/store/thunk/post-category";

const CategoryAddPage = () => {
  const { execute, isLoading } = useAsyncAction();

  const onAddData = (data: CategorySchemaType) => {
    execute({
      actionCreator: () => postCategory(data),
    });
  };

  return (
    <div className="container">
      <Back text="Thêm danh mục" />
      <CategoryForm onSubmit={onAddData} isSubmiting={isLoading} />
    </div>
  );
};

export default CategoryAddPage;
