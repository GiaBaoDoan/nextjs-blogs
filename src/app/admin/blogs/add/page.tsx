"use client";

import Back from "@/components/ui/back";
import { BlogForm } from "@/components/blogs/BlogForm";
import { postBlog } from "@/store/thunk/post-blog";
import { BlogSchemaType } from "@/schema/blog.schema";
import useAsyncAction from "@/hooks/useAction";

const BlogAddPage = () => {
  const { execute, isLoading } = useAsyncAction();

  const onSubmit = (data: BlogSchemaType) => {
    execute({
      actionCreator: () => postBlog(data),
    });
  };

  return (
    <div className="container">
      <Back text="Thêm bài viết" />
      <BlogForm onSubmit={onSubmit} isSubmiting={isLoading} />
    </div>
  );
};

export default BlogAddPage;
