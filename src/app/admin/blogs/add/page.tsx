"use client";

import Back from "@/components/ui/back";
import { BlogForm } from "@/components/blogs/BlogForm";
import { BlogSchemaType } from "@/schema/blog.schema";
import { useCreatePost } from "@/hooks/useBlogs";

const BlogAddPage = () => {
  const createBlog = useCreatePost();
  const onSubmit = (data: BlogSchemaType) => createBlog.mutate(data);

  return (
    <div className="container">
      <Back text="Thêm bài viết" />
      <BlogForm onSubmit={onSubmit} isSubmiting={false} />
    </div>
  );
};

export default BlogAddPage;
