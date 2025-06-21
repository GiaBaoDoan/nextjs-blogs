"use client";

import Link from "next/link";
import BlogCard from "@/components/blogs/BlogCard";

import { useAppSelector } from "@/store/store";
import { BlogSkeletonCard } from "@/components/blogs/BlogSkeleton";

const BlogList = () => {
  const { blogs, isLoading } = useAppSelector((state) => state.BlogListReducer);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full mb-5">
      {blogs.map((blog, idx) =>
        isLoading ? (
          <BlogSkeletonCard key={idx} />
        ) : (
          <Link key={idx} href={`/blogs/${blog.slug}`}>
            <BlogCard blog={blog} />
          </Link>
        )
      )}
    </div>
  );
};

export default BlogList;
