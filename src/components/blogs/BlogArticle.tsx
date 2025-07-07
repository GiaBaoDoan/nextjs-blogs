import { Badge } from "@/components/ui/badge";
import { useFetchCommentList } from "@/hooks/useComments";
import { Blog } from "@/types/blog.type";
import { format } from "date-fns";
import { MessageCircle, MessageSquare } from "lucide-react";

const BlogArticle = ({ blog }: { blog: Blog }) => {
  const { data: comments } = useFetchCommentList(blog?._id as string);

  return (
    <section className="space-y-5">
      <h1>{blog?.title}</h1>
      <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        <Badge variant="primary">{blog?.category.name}</Badge>
        <span className="border-l border-r px-2">
          {blog?.createdAt &&
            format(blog?.createdAt as string, "HH:mm:ss dd/MM/yyyy")}
        </span>
        <div className="flex gap-1 items-center">
          <MessageCircle size={15} /> <span>{comments?.data?.length}</span>
        </div>
      </div>
    </section>
  );
};

export default BlogArticle;
