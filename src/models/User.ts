// src/models/User.ts
import { User } from "@/types/user.type";
import { Schema, model, models } from "mongoose";

const UserSchema = new Schema<User>(
  {
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
    username: { type: String, required: true, trim: true },
    isVerfied: { type: Boolean, required: false, default: true },
    isAdmin: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

const UserModel = models.User || model<User>("User", UserSchema);

export default UserModel;
