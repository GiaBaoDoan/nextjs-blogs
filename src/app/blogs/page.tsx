"use client";

import { SearchInput } from "@/components/ui/search";
import { Blog } from "@/types/blog.type";
import { BlogSkeletonCard } from "@/components/blogs/BlogSkeleton";
import { usePosts } from "@/hooks/useBlogs";
import { CustomPagination } from "@/components/custom/Pagination";

import BlogCategory from "@/components/blogs/BlogCategory";
import Breadcrumbs from "@/components/ui/breadcumb-links";
import useQuery from "@/hooks/useQuery";
import BlogList from "@/components/blogs/BlogList";

const BlogListPage = () => {
  const { queries, updateQuery } = useQuery({ keyword: "", limit: 6, page: 1 });

  const { data: blogs, isLoading } = usePosts(queries);

  return (
    <section className="container py-10">
      <Breadcrumbs items={[{ label: "blog", href: "/blogs" }]} />
      <div className="flex items-center justify-between mb-7">
        <h1>Blog</h1>
        <div className="flex gap-5">
          <BlogCategory onChange={updateQuery} />
          <SearchInput onChange={updateQuery} keyword={queries.keword} />
        </div>
      </div>

      {isLoading ? (
        <BlogSkeletonCard />
      ) : (
        <BlogList blogs={blogs?.data as Blog[]} />
      )}
      <CustomPagination
        currentPage={blogs?.pagination?.page as number}
        totalPages={blogs?.pagination.totalPages as number}
        onPageChange={updateQuery}
      />
    </section>
  );
};

export default BlogListPage;
