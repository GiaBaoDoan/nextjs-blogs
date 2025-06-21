import BlogCard from "@/components/blogs/BlogCard";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getListBlogs } from "@/store/thunk/get-list-blogs";
import { useEffect, useMemo } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const RelatedBlogs = ({ category = "" }: { category: string }) => {
  const dispatch = useAppDispatch();

  const { blogs } = useAppSelector((state) => state.BlogListReducer);

  const relateds = useMemo(() => {
    return blogs.filter((post) => post.category._id === category);
  }, [blogs, category]);

  useEffect(() => {
    dispatch(getListBlogs(""));
  }, [dispatch]);

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Bài viết liên quan</h3>
      <Carousel>
        <CarouselContent>
          {relateds.map((blog, index) => (
            <CarouselItem key={index} className="lg:basis-1/3 md:basis-1/2">
              <BlogCard blog={blog} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default RelatedBlogs;
