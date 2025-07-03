import { useEffect, useMemo } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { usePosts } from "@/hooks/useBlogs";
import BlogCard from "@/components/blogs/BlogCard";
import useQuery from "@/hooks/useQuery";

const RelatedBlogs = ({ category }: { category: string }) => {
  const { queries } = useQuery({ limit: 100, category });
  const { data: relatedBlogs } = usePosts(queries);

  return (
    <section className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Bài viết liên quan</h3>
      <Carousel>
        <CarouselContent>
          {relatedBlogs?.data?.map((blog, index) => (
            <CarouselItem key={index} className="lg:basis-1/3 md:basis-1/2">
              <BlogCard blog={blog} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default RelatedBlogs;
