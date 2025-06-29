import mongoose, { Types } from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    blogId: { type: Types.ObjectId, ref: "Blog", required: true },

    content: { type: String, required: true, trim: true, maxlength: 1000 },

    user: { type: Types.ObjectId, ref: "User", default: null },
  },
  { timestamps: true }
);

CommentSchema.index({ blogId: 1, createdAt: -1 });

export const CommentModel =
  mongoose.models.Comment || mongoose.model("Comment", CommentSchema);
