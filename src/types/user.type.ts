import { UserSchemaType } from "@/schema/user.schema";

export interface User extends UserSchemaType {
  _id: string;
  image: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}
