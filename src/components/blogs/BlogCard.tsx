"use client";

import Image from "next/image";
import { Blog } from "@/types/blog.type";
import { MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { useFetchCommentList } from "@/hooks/useComments";

const BlogCard = ({ blog }: { blog: Blog }) => {
  const router = useRouter();
  const { data: comments } = useFetchCommentList(blog._id);
  return (
    <div
      className="cursor-pointer"
      onClick={() => router.push(`/blogs/${blog.slug}`)}
    >
      <Image
        src={blog?.thumbnail}
        alt="ảnh thumbnail"
        width={200}
        height={200}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <span className="inline-flex mb-4 items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset">
        {blog.category.name}
      </span>
      <div className="space-y-2 mb-5">
        <h4 className="font-medium hover:text-blue-600 hover:underline transition-all">
          {blog.title}
        </h4>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {blog.description}
        </p>
      </div>
      <div className="text-xs text-muted-foreground flex items-center gap-3">
        <div className="border-r pr-3">
          {format(new Date(blog.createdAt), "dd/MM/yyyy hh:mm:ss")}
        </div>

        <div className="flex items-center gap-1">
          <MessageSquare size={15} /> <span>{comments?.data?.length}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
