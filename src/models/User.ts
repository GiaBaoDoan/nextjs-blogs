// src/models/User.ts
import { User } from "@/types/user.type";
import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema<User>(
  {
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
    username: { type: String, required: true, trim: true },
    bio: { type: String, required: false, default: "" },
    phone: { type: String, required: false, default: "" },
    address: { type: String, required: false, default: "" },
    isVerified: { type: Boolean, default: false },
    isAdmin: { type: Boolean, required: true, default: false },
    status: { type: Boolean, required: true, default: true },
    avatar: { type: String, required: false, default: null },
  },
  { timestamps: true, strict: false }
);

const UserModel = models.User || model<User>("User", UserSchema);

export default UserModel;
