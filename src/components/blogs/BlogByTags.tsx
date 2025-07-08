import BlogPostNavigation from "@/components/blogs/BlogPostNavigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Blog } from "@/types/blog.type";

const BlogByTags = ({ blog }: { blog: Blog }) => {
  return (
    <section className="space-y-6 mb-24">
      {blog?.tags && (
        <div
          className="flex gap-2 items-center
        border-2 border-dashed border-indigo-400/60
        dark:border-indigo-600/20
        rounded-xl p-6 md:p-8
        bg-white/70 dark:bg-gray-800/50
        backdrop-blur-sm"
        >
          <span className="font-semibold">Tags bài viết:</span>
          <div className="flex flex-wrap">
            {blog?.tags.map((tag, index) => (
              <Link key={index} href={`/tags/${tag.slug}`}>
                <Badge variant="primary" className="hover:opacity-60">
                  #{tag.name}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      )}
      <BlogPostNavigation />
    </section>
  );
};

export default BlogByTags;
