import connect from "@/lib/database";
import BlogModel from "@/models/Blog";
import { withErrorHandler } from "@/lib/errorHandler";
import { NextRequest, NextResponse } from "next/server";
import { BlogSchemaType } from "@/schema/blog.schema";
import { uploadToCloudinary } from "@/lib/upload";
import "@/models/Category";
import "@/models/Tags";
import CustomError from "@/lib/cutomError";
import Tags from "@/models/Tags";

const postHandler = async (request: NextRequest) => {
  await connect();
  const body = (await request.json()) as BlogSchemaType;

  const url = await uploadToCloudinary(body.thumbnail);

  const newBlog = await BlogModel.create({
    ...body,
    thumbnail: url,
  });

  return NextResponse.json(
    {
      message: "Tạo bài viết thành công!",
      data: newBlog,
    },
    { status: 201 }
  );
};

const getHandler = async (request: NextRequest) => {
  await connect();

  const { searchParams } = new URL(request.url);

  const search = Object.fromEntries(searchParams.entries());

  let { page = "1", limit = "6", ...filter } = search as Record<string, any>;

  limit = parseInt(limit);
  page = parseInt(page);

  const skip = (page - 1) * limit;

  if (filter.tags) {
    const tag = await Tags.findOne({ slug: filter.tags });

    if (!tag) throw new CustomError("Không tìm thấy slug", 404);

    filter.tags = tag._id;
  }

  filter.$or = [
    {
      title: { $regex: filter.keyword || "", $options: "i" },
    },
  ];

  delete filter.keyword;

  const blogs = await BlogModel.find(filter)
    .skip(skip)
    .limit(limit)
    .populate("tags")
    .populate("category")
    .sort({ createdAt: -1 });

  const total = await BlogModel.countDocuments(filter);

  const totalPages = Math.ceil(total / limit);

  return NextResponse.json(
    {
      data: blogs,
      pagination: {
        page,
        limit,
        total,
        totalPages,
      },
    },
    { status: 200 }
  );
};

export const POST = withErrorHandler(postHandler);
export const GET = withErrorHandler(getHandler);
