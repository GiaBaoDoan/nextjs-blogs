import { useParams } from "next/navigation";
import { useMemo } from "react";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { Blog } from "@/types/blog.type";
import { usePosts } from "@/hooks/useBlogs";
import Link from "next/link";
import useQuery from "@/hooks/useQuery";

function usePrevNextPost(blogs: Blog[] | [], slug: string) {
  return useMemo(() => {
    const index = blogs?.findIndex((blog) => blog.slug === slug);
    const prev = index > 0 ? blogs[index - 1] : null;
    const next = index < blogs?.length - 1 ? blogs[index + 1] : null;
    return { prev, next };
  }, [blogs, slug]);
}

export default function BlogPostNavigation() {
  const { slug } = useParams();

  const { queries } = useQuery({ limit: 100 });

  const { data } = usePosts(queries);

  const blogs = data?.data as Blog[] | [];

  const { prev, next } = usePrevNextPost(blogs, slug as string);

  return (
    <div className="mt-10 grid grid-cols-2 gap-4">
      {prev ? (
        <div>
          <div className="flex items-center gap-1 mb-1 text-sm">
            <ChevronsLeft size={15} />
            <span className="text-sm">Bài viết trước</span>
          </div>
          <Link
            href={`/blogs/${prev.slug}`}
            className="underline text-blue-700 line-clamp-2 text-sm"
          >
            {prev.title}
          </Link>
        </div>
      ) : (
        <div />
      )}

      {next ? (
        <div className="text-right">
          <div className="flex items-center gap-1 justify-end mb-1 ">
            <span className="text-sm">Bài viết sau</span>
            <ChevronsRight size={15} />
          </div>
          <Link
            href={`/blogs/${next.slug}`}
            className="underline text-blue-700 line-clamp-2 text-sm"
          >
            {next.title}
          </Link>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
