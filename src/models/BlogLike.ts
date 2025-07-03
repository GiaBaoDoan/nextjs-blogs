// /models/BlogLike.ts
import mongoose, { Schema, Types } from "mongoose";

export interface IBlogLike {
  blog: Types.ObjectId; // bài viết
  user: Types.ObjectId; // người like
}

const blogLikeSchema = new Schema<IBlogLike>(
  {
    blog: {
      type: Schema.Types.ObjectId,
      ref: "Blog",
      required: true,
      index: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
  },
  { timestamps: true }
);

// Mỗi user chỉ được like 1 lần / bài viết
blogLikeSchema.index({ blog: 1, user: 1 }, { unique: true });

export default mongoose.models.BlogLike ||
  mongoose.model<IBlogLike>("BlogLike", blogLikeSchema);
