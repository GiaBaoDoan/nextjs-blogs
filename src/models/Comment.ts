import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    blogId: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const CommentModel =
  mongoose.models.Comment || mongoose.model("Comment", CommentSchema);
