import { UserRole, UserStatus } from "@/constants/enum";
import { z } from "zod";

export const UserFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(40).optional(),
  username: z.string().min(1).max(40),
  role: z.string().min(1),
  status: z.string().min(1),
  bio: z.string().max(200).optional(),
  address: z.string().max(200).optional(),
});

export type UserSchemaType = z.infer<typeof UserFormSchema>;

export const UserDefaultValues: UserSchemaType = {
  email: "",
  username: "",
  address: "",
  bio: "",
  password: "",
  role: UserRole.user,
  status: UserStatus.PRIVATE,
};

export default UserFormSchema;
