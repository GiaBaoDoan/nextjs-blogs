import BlogCard from "@/components/blogs/BlogCard";
import { Badge } from "@/components/ui/badge";
import { Blog } from "@/types/blog.type";
import Link from "next/link";

const BlogCardWithTags = ({ blog }: { blog: Blog }) => {
  return (
    <div className="flex-col flex justify-between">
      <BlogCard blog={blog} />

      {blog.tags?.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-3">
          {blog.tags.map((tag) => (
            <Link href={`/tags/${tag.slug}`} key={tag._id}>
              <Badge
                variant="secondary"
                className="cursor-pointer  hover:bg-gray-100 transition"
              >
                #{tag.name}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogCardWithTags;
