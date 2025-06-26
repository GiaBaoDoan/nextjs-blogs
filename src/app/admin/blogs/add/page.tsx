"use client";

import Back from "@/components/ui/back";
import { BlogForm } from "@/components/blogs/BlogForm";
import { useCreatePost } from "@/hooks/useBlogs";
import { BlogSchemaType } from "@/schema/blog.schema";
import { useRouter } from "next/navigation";
import SuccessToast from "@/components/custom/SuccessToast";

const BlogAddPage = () => {
  const router = useRouter();
  const { mutate } = useCreatePost();

  const onSubmit = (data: BlogSchemaType) => {
    mutate(data, {
      onSuccess: (res) => {
        SuccessToast(res.message);
        router.push("/admin/blogs");
      },
    });
  };

  return (
    <div className="container">
      <Back text="Thêm bài viết" />
      <BlogForm onSubmit={onSubmit} isSubmiting={false} />
    </div>
  );
};

export default BlogAddPage;
