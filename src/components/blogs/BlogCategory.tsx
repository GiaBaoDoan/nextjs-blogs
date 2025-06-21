"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getAllCategory } from "@/store/thunk/get-list-categories";
import { useEffect } from "react";

const BlogCategory = ({ onChange }: { onChange: (value: any) => void }) => {
  const dispatch = useAppDispatch();

  const { categories } = useAppSelector((state) => state.CategoryListReducer);

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  return (
    <Select onValueChange={(category) => onChange({ category, page: 1 })}>
      <SelectTrigger className="w-[400px]">
        <SelectValue placeholder="Tất cả danh mục" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {categories.map((cat, index) => (
            <SelectItem key={index} value={cat._id}>
              {cat.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default BlogCategory;
