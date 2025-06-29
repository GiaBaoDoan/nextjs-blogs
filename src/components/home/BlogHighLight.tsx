"use client";

import BlogList from "@/components/blogs/BlogList";
import useQuery from "@/hooks/useQuery";
import ButtonPrimary from "@/components/ui/button-primary";

import { Blog } from "@/types/blog.type";
import { usePosts } from "@/hooks/useBlogs";
import { BlogSkeletonCard } from "@/components/blogs/BlogSkeleton";

const BlogHighLight = () => {
  const { queries } = useQuery({ page: 1, limit: 6 });
  const { data: blogs, isLoading } = usePosts(queries);

  return (
    <section className="flex items-center flex-col py-10">
      <article className="space-y-3">
        <h2 className="text-center font-bold">Những bài viết nổi bật</h2>
        <p className="text-center text-muted-foreground max-w-xl mb-8 text-sm">
          Khám phá các bài viết chuyên sâu về thiết kế web, lập trình, công nghệ
          và những chia sẻ thực tế từ hành trình phát triển phần mềm.
        </p>
      </article>

      {isLoading ? (
        <BlogSkeletonCard />
      ) : (
        <BlogList blogs={blogs?.data as Blog[]} />
      )}
      <ButtonPrimary className="mt-10 bg-indigo-700" link="/blogs">
        Đọc bài viết{" "}
        <svg
          className="w-5 h-5 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </ButtonPrimary>
    </section>
  );
};

export default BlogHighLight;
