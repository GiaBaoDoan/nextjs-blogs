"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCategories } from "@/hooks/useCategories";

const BlogCategory = ({ onChange }: { onChange: (value: any) => void }) => {
  const { data } = useCategories();
  return (
    <Select onValueChange={(category) => onChange({ category, page: 1 })}>
      <SelectTrigger className="w-[400px]">
        <SelectValue placeholder="Tất cả danh mục" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {data?.data?.map((cat, index) => (
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
