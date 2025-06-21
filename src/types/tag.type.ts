import { TagSchemaType } from "@/schema/tag.schema";

export interface Tag extends TagSchemaType {
  _id: string;
  createdAt: string;
  updatedAt: string;
}
