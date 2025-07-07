"use client";

import Back from "@/components/ui/back";
import SuccessToast from "@/components/custom/SuccessToast";
import { BlogForm } from "@/components/blogs/BlogForm";
import { usePost, useUpdatePost } from "@/hooks/useBlogs";
import { BlogSchemaType } from "@/schema/blog.schema";
import { useParams } from "next/navigation";
import { useMemo } from "react";

const BlogEditPage = () => {
  const { id } = useParams();

  const { mutate, isPending } = useUpdatePost(id as string);

  const onSubmit = (data: BlogSchemaType) => {
    mutate(data, {
      onSuccess: (res) => SuccessToast(res.message),
    });
  };

  const { data: blog } = usePost(id as string);

  const newBlog = useMemo(() => {
    if (!blog?.data) return null;

    return {
      ...blog.data,
      category: blog?.data?.category._id,
      tags: blog?.data?.tags.map((tag) => tag._id),
    };
  }, [blog?.data]);

  return (
    <div className="container">
      <Back text="Edit bài viết" />
      <BlogForm
        isSubmiting={isPending}
        blog={newBlog as BlogSchemaType}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default BlogEditPage;
