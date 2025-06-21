// src/models/User.ts
import { UserRole, UserStatus } from "@/constants/enum";
import { User } from "@/types/user.type";
import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, trim: true },
    username: { type: String, required: true, trim: true },
    bio: { type: String, required: false, default: "" },
    phone: { type: String, required: false, default: "" },
    address: { type: String, required: false, default: "" },
    isVerified: { type: Boolean, default: false },
    role: {
      type: String,
      default: UserRole.user,
      enum: Object.values(UserRole),
      required: true,
    },
    status: {
      type: String,
      default: UserStatus.PENDING,
      enum: Object.values(UserStatus),
      required: true,
    },
    image: { type: String, required: false, default: null },
  },
  { timestamps: true, strict: false }
);

const UserModel = models.User || model<User>("User", UserSchema);

export default UserModel;
