"use client";

import { SearchInput } from "@/components/ui/search";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useParams } from "next/navigation";
import { getTagById } from "@/store/thunk/get-detail-tag";
import { useEffect } from "react";
import { getListBlogs } from "@/store/thunk/get-list-blogs";
import { CustomPagination } from "@/components/custom/Pagination";
import { BlogSkeletonCard } from "@/components/blogs/BlogSkeleton";

import Breadcrumbs from "@/components/ui/breadcumb-links";
import useQuery from "@/hooks/useQuery";
import BlogCardWithTags from "@/components/blogs/BlogCardWithTags";

const TagDetailPage = () => {
  const { slug } = useParams();

  const dispatch = useAppDispatch();

  const { tag } = useAppSelector((state) => state.TagReducer);

  const { blogs, pagination, isLoading } = useAppSelector(
    (state) => state.BlogListReducer
  );

  const { query, updateQuery } = useQuery({
    tags: slug,
    keyword: "",
    limit: 6,
  });

  useEffect(() => {
    dispatch(getTagById(slug as string));
  }, [dispatch, slug]);

  useEffect(() => {
    const delay = setTimeout(() => {
      dispatch(getListBlogs(query));
    }, 300);

    return () => clearTimeout(delay);
  }, [dispatch, query]);

  return (
    <section className="container py-10">
      <Breadcrumbs
        items={[
          {
            label: "blog",
          },
          {
            label: `Tag: ${tag?.name || ""}`,
          },
        ]}
      />
      <div className="flex justify-between items-center space-y-10">
        <h2>Tag: {tag?.name}</h2>
        <SearchInput onChange={updateQuery} keyword={query.keyword} />
      </div>

      <div className="grid grid-cols-3 gap-5">
        {blogs?.map((blog, index) =>
          isLoading ? (
            <BlogSkeletonCard key={index} />
          ) : (
            <BlogCardWithTags blog={blog} key={index} />
          )
        )}
      </div>

      <CustomPagination
        currentPage={pagination?.page as number}
        totalPages={pagination?.totalPages as number}
        onPageChange={updateQuery}
      />
    </section>
  );
};

export default TagDetailPage;
