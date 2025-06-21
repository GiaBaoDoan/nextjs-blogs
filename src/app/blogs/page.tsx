"use client";

import { SearchInput } from "@/components/ui/search";
import { CustomPagination } from "@/components/custom/Pagination";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect } from "react";
import { getListBlogs } from "@/store/thunk/get-list-blogs";

import BlogCategory from "@/components/blogs/BlogCategory";
import Breadcrumbs from "@/components/ui/breadcumb-links";
import useQuery from "@/hooks/useQuery";
import BlogList from "@/components/blogs/BlogList";

const BlogListPage = () => {
  const { query, updateQuery } = useQuery({ keyword: "", limit: 6 });

  const { pagination } = useAppSelector((state) => state.BlogListReducer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const delay = setTimeout(() => {
      dispatch(getListBlogs(query));
    }, 300);

    return () => clearTimeout(delay);
  }, [dispatch, query]);

  return (
    <section className="container py-10">
      <Breadcrumbs items={[{ label: "blog", href: "/blogs" }]} />
      <div className="flex items-center justify-between mb-7">
        <h1>Blog</h1>
        <div className="flex gap-5">
          <BlogCategory onChange={updateQuery} />
          <SearchInput onChange={updateQuery} keyword={query.keyword} />
        </div>
      </div>

      <BlogList />
      <CustomPagination
        currentPage={pagination?.page as number}
        totalPages={pagination?.totalPages as number}
        onPageChange={updateQuery}
      />
    </section>
  );
};

export default BlogListPage;
