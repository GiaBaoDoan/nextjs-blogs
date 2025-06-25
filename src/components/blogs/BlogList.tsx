"use client";

import BlogCard from "@/components/blogs/BlogCard";

import { Blog } from "@/types/blog.type";

const BlogList = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full mb-5">
      {blogs?.map((blog, idx) => (
        <BlogCard key={idx} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
