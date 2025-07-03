"use client";

import { useParams } from "next/navigation";
import { BlogDetailSkeleton } from "@/components/blogs/BlogDetailSeketon";
import { usePost } from "@/hooks/useBlogs";
import { Blog } from "@/types/blog.type";

import Breadcrumbs from "@/components/ui/breadcumb-links";
import RelatedBlogs from "@/components/blogs/RelatedBlogs";
import CommentList from "@/components/comments/CommentList";
import CommentForm from "@/components/comments/CommentForm";
import BlogByTags from "@/components/blogs/BlogByTags";
import BlogArticle from "@/components/blogs/BlogArticle";
import PostActionBar from "@/components/custom/StickyActionBar";

const BlogDetail = () => {
  const { slug } = useParams();

  const { data, isLoading } = usePost(slug as string);
  const blog = data?.data;

  if (isLoading) return <BlogDetailSkeleton />;

  return (
    <main className="container my-10 space-y-16">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* ActionBar trái (chỉ hiển thị ở màn hình lớn) */}
        <aside className="hidden lg:block sticky top-20 h-fit">
          <PostActionBar postId={blog?._id as string} />
        </aside>

        {/* Nội dung chính */}
        <div className="w-full max-w-3xl space-y-8">
          <Breadcrumbs
            items={[
              { label: "blog", href: "/blogs" },
              { label: blog?.title as string },
            ]}
          />

          <BlogArticle blog={blog as Blog} />

          {/* Nội dung bài viết */}
          <article
            className="max-w-none space-y-7 leading-10 text-base text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: blog?.content || "" }}
          />
        </div>
      </div>

      {/* Phần dưới bài viết */}
      <div className="mx-auto max-w-3xl space-y-10">
        <BlogByTags blog={blog as Blog} />
        <CommentList blogId={blog?._id as string} />
        <CommentForm blogId={blog?._id as string} />
      </div>

      <RelatedBlogs category={blog?.category._id as string} />
    </main>
  );
};

export default BlogDetail;
