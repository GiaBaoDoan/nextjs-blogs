import mongoose from "mongoose";

const BlogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      default: "",
    },
    seoDescription: {
      type: String,
      default: "",
    },
    seoKeyWord: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      default: "",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag",
      },
    ],
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
  },
  { timestamps: true }
);

export default mongoose.models.BlogPost ||
  mongoose.model("BlogPost", BlogPostSchema);
