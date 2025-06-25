"use client";

import { Badge } from "@/components/ui/badge";
import { useParams } from "next/navigation";
import { format } from "date-fns";
import { MessageSquare } from "lucide-react";

import Breadcrumbs from "@/components/ui/breadcumb-links";
import BlogPostNavigation from "@/components/blogs/BlogPostNavigation";
import Link from "next/link";
import RelatedBlogs from "@/components/blogs/RelatedBlogs";

import CommentList from "@/components/comments/CommentList";
import CommentForm from "@/components/comments/CommentForm";
import { BlogDetailSkeleton } from "@/components/blogs/BlogDetailSeketon";

import { usePost } from "@/hooks/useBlogs";

const BlogDetail = () => {
  const { slug } = useParams();

  const { data, isLoading } = usePost(slug as string);

  const blog = data?.data;

  if (isLoading) return <BlogDetailSkeleton />;

  return (
    <main className="my-5 container space-y-10">
      <section className="max-w-3xl mx-auto space-y-6">
        <Breadcrumbs
          items={[
            { label: "blog", href: "/blogs" },
            { label: blog?.title || "" },
          ]}
        />

        <div className="space-y-5">
          <h1>{blog?.title}</h1>
          <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset">
              {blog?.category.name}
            </span>
            <span className="border-l border-r px-2">
              {blog?.createdAt &&
                format(blog?.createdAt as string, "HH:mm:ss dd/MM/yyyy")}
            </span>
            <div className="flex gap-1 items-center">
              <MessageSquare size={15} /> <span>0</span>
            </div>
          </div>
        </div>

        <article
          className="article-blog space-y-5"
          dangerouslySetInnerHTML={{ __html: blog?.content || "" }}
        />
      </section>
      <section className="max-w-3xl mx-auto space-y-6 mb-24">
        {blog?.tags && (
          <div className="flex flex-wrap items-center gap-2 border border-slate-400 border-dashed rounded-3xl p-5 ">
            <span className="font-bold">Tags bài viết:</span>
            {blog?.tags.map((tag, index) => (
              <Link key={index} href={`/tags/${tag.slug}`}>
                <Badge variant="outline" className="hover:opacity-60">
                  #{tag.name}
                </Badge>
              </Link>
            ))}
          </div>
        )}
        <BlogPostNavigation />
      </section>

      <section className="max-w-3xl mx-auto space-y-10">
        <hr />
        <CommentList blogId={blog?._id || ""} />
        <CommentForm blogId={blog?._id || ""} />
      </section>

      <section className="mt-24">
        <RelatedBlogs category={blog?.category._id as string} />
      </section>
    </main>
  );
};

export default BlogDetail;
