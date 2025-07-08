"use client";

import BlogList from "@/components/blogs/BlogList";
import useQuery from "@/hooks/useQuery";

import { Blog } from "@/types/blog.type";
import { usePosts } from "@/hooks/useBlogs";
import { BlogSkeletonCard } from "@/components/blogs/BlogSkeleton";
import { Button } from "@/components/ui/button";

const BlogHighLight = () => {
  const { queries } = useQuery({ page: 1, limit: 6 });
  const { data: blogs, isLoading } = usePosts(queries);

  return (
    <section className="bg-white pt-12 pb-5">
      <div className="container flex flex-col items-center">
        <article className="space-y-3 text-center">
          <h2 className="text-3xl font-bold">Blog cá nhân</h2>
          <p className="text-center text-muted-foreground max-w-xl mb-8">
            Khám phá các bài viết chuyên sâu về thiết kế web, lập trình, công
            nghệ và những chia sẻ thực tế từ hành trình phát triển phần mềm.
          </p>
        </article>

        {isLoading ? (
          <BlogSkeletonCard />
        ) : (
          <BlogList blogs={blogs?.data as Blog[]} />
        )}

        <Button
          size="lg"
          variant="primary" // giữ lại variant nếu đã config trong shadcn/ui
          className="
    mt-6 flex items-center gap-2      
    rounded-full                    
    bg-indigo-600 hover:bg-indigo-700
    text-white font-medium
    px-6 py-3                        
    shadow hover:shadow-md
    transition-all duration-150
  "
        >
          Tất cả bài viết
          <svg
            className="w-5 h-5 shrink-0" // bỏ ml‑2 ‑mr‑1, dùng gap‑2 ở wrapper
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </div>
    </section>
  );
};

export default BlogHighLight;
