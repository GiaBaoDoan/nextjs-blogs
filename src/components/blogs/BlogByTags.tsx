import BlogPostNavigation from "@/components/blogs/BlogPostNavigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Blog } from "@/types/blog.type";

const BlogByTags = ({ blog }: { blog: Blog }) => {
  return (
    <section className="space-y-6 mb-24">
      {blog?.tags && (
        <div className="flex flex-wrap items-center gap-2 border border-slate-400 border-dashed rounded-xl p-5">
          <span className="font-semibold">Tags bài viết:</span>
          {blog?.tags.map((tag, index) => (
            <Link key={index} href={`/tags/${tag.slug}`}>
              <Badge variant="primary" className="hover:opacity-60">
                #{tag.name}
              </Badge>
            </Link>
          ))}
        </div>
      )}
      <BlogPostNavigation />
    </section>
  );
};

export default BlogByTags;
