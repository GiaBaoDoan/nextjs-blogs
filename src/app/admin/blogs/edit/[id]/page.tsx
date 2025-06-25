"use client";

import { BlogForm } from "@/components/blogs/BlogForm";
import { usePost, useUpdatePost } from "@/hooks/useBlogs";
import { BlogSchemaType } from "@/schema/blog.schema";
import { useParams } from "next/navigation";
import { useMemo } from "react";
import Back from "@/components/ui/back";

const BlogEditPage = () => {
  const { id } = useParams();

  const updateBlog = useUpdatePost(id as string);

  const onSubmit = (data: BlogSchemaType) => updateBlog.mutate(data);

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
        isSubmiting={false}
        blog={newBlog as BlogSchemaType}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default BlogEditPage;
