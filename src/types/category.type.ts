import { CategorySchemaType } from "@/schema/category.schema";

export interface Category extends CategorySchemaType {
  _id: string;
  createdAt: string;
  updatedAt: string;
}
