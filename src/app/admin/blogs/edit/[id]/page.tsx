"use client";

import { BlogForm } from "@/components/blogs/BlogForm";
import Back from "@/components/ui/back";
import useAsyncAction from "@/hooks/useAction";
import { BlogSchemaType } from "@/schema/blog.schema";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getBlogById } from "@/store/thunk/get-detail-blog";
import { updateBlog } from "@/store/thunk/update-blog";
import { useParams } from "next/navigation";
import { useEffect, useMemo } from "react";

const BlogEditPage = () => {
  const { execute, isLoading } = useAsyncAction();
  const dispatch = useAppDispatch();

  const { id } = useParams();

  const onSubmit = (data: BlogSchemaType) => {
    execute({
      actionCreator: () => updateBlog({ id: id as string, data }),
    });
  };

  const { blog } = useAppSelector((state) => state.BlogReducer);

  const data = useMemo(
    () => ({
      ...blog,
      category: blog?.category._id,
      tags: blog?.tags.map((tag) => tag._id),
    }),
    [blog]
  );

  useEffect(() => {
    dispatch(getBlogById(id as string));
  }, [dispatch, id]);

  return (
    <div className="container">
      <Back text="Edit bài viết" />
      <BlogForm
        blog={data as BlogSchemaType}
        onSubmit={onSubmit}
        isSubmiting={isLoading}
      />
    </div>
  );
};

export default BlogEditPage;
