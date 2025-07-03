import { useFetchCommentList } from "@/hooks/useComments";
import { Blog } from "@/types/blog.type";
import { format } from "date-fns";
import { MessageSquare } from "lucide-react";

const BlogArticle = ({ blog }: { blog: Blog }) => {
  const { data: comments } = useFetchCommentList(blog?._id as string);

  return (
    <section className="space-y-5">
      <h1>{blog?.title}</h1>
      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset">
          {blog?.category.name}
        </span>
        <span className="border-l border-r px-2">
          {blog?.createdAt &&
            format(blog?.createdAt as string, "HH:mm:ss dd/MM/yyyy")}
        </span>
        <div className="flex gap-1 items-center">
          <MessageSquare size={15} /> <span>{comments?.data?.length}</span>
        </div>
      </div>
    </section>
  );
};

export default BlogArticle;
