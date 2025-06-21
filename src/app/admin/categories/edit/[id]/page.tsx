"use client";

import useAsyncAction from "@/hooks/useAction";
import CategoryForm from "@/components/categories/CategoryForm";
import Back from "@/components/ui/back";

import { CategorySchemaType } from "@/schema/category.schema";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getCategoryById } from "@/store/thunk/get-detail-category";
import { Category } from "@/types/category.type";
import { updateCategory } from "@/store/thunk/update-category";

const CategoryEditPage = () => {
  const { id } = useParams();

  const { category } = useAppSelector((state) => state.categoryReducer);
  const dispatch = useAppDispatch();

  const { execute, isLoading } = useAsyncAction();

  const onSubmit = (data: CategorySchemaType) => {
    execute({
      actionCreator: () => updateCategory({ id: id as string, data }),
    });
  };

  useEffect(() => {
    dispatch(getCategoryById(id as string));
  }, [dispatch, id]);

  return (
    <div className="container">
      <Back text="Edit danh mục" />
      <CategoryForm
        category={category as Category}
        onSubmit={onSubmit}
        isSubmiting={isLoading}
      />
    </div>
  );
};

export default CategoryEditPage;
