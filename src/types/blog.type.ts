import { BlogSchemaType } from "@/schema/blog.schema";
import { Category } from "@/types/category.type";
import { Tag } from "@/types/tag.type";

export interface Blog extends Omit<BlogSchemaType, "category" | "tags"> {
  _id: string;
  category: Category;
  tags: Tag[];
  updatedAt: string;
  createdAt: string;
}
