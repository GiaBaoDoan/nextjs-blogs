"use client";

import { SearchInput } from "@/components/ui/search";
import { useParams } from "next/navigation";

import { usePosts } from "@/hooks/useBlogs";
import { CustomPagination } from "@/components/custom/Pagination";
import { BlogSkeletonCard } from "@/components/blogs/BlogSkeleton";

import Breadcrumbs from "@/components/ui/breadcumb-links";
import useQuery from "@/hooks/useQuery";
import BlogCardWithTags from "@/components/blogs/BlogCardWithTags";
import { useTag } from "@/hooks/useTag";

const TagDetailPage = () => {
  const { slug } = useParams();

  const { queries, updateQuery } = useQuery({
    tags: slug,
    keyword: "",
    page: 1,
    limit: 6,
  });

  const { data: blogs, isLoading } = usePosts(queries);
  const { data: tag } = useTag(slug as string);

  return (
    <section className="container py-10">
      <Breadcrumbs
        items={[
          {
            label: "blog",
          },
          {
            label: `Tag: ${tag?.data?.name || ""}`,
          },
        ]}
      />
      <div className="flex justify-between items-center space-y-10">
        <h2>Tag: {tag?.data?.name}</h2>
        <SearchInput onChange={updateQuery} keyword={queries.keyword} />
      </div>

      {isLoading ? (
        <BlogSkeletonCard />
      ) : (
        <div className="grid grid-cols-3 gap-5">
          {blogs?.data?.map((blog, index) => (
            <BlogCardWithTags blog={blog} key={index} />
          ))}
        </div>
      )}

      <CustomPagination
        currentPage={blogs?.pagination?.page as number}
        totalPages={blogs?.pagination?.totalPages as number}
        onPageChange={updateQuery}
      />
    </section>
  );
};

export default TagDetailPage;
