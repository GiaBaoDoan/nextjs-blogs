"use client";

import Image from "next/image";
import { Blog } from "@/types/blog.type";
import { Heart, MessageCircle, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { useFetchCommentList } from "@/hooks/useComments";
import { Badge } from "@/components/ui/badge";
import { useFetchLikeList } from "@/hooks/useLikePost";
const BlogCard = ({ blog }: { blog: Blog }) => {
  const router = useRouter();
  const { data: comments } = useFetchCommentList(blog._id);
  const { data: likes } = useFetchLikeList(blog._id);
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
      <Badge className="mb-3" variant="primary">
        {blog?.category?.name || ""}
      </Badge>
      <div className="space-y-2 mb-5">
        <h4 className="font-medium hover:text-indigo-600 hover:underline transition-all">
          {blog.title}
        </h4>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {blog.description}
        </p>
      </div>
      <div className="text-xs text-muted-foreground flex items-center gap-3">
        <p className="border-r pr-3">
          {format(new Date(blog.createdAt), "dd/MM/yyyy hh:mm:ss")}
        </p>

        <div className="flex items-center gap-1 border-r pr-3">
          <MessageCircle size={15} /> <span>{comments?.data?.length || 0}</span>
        </div>
        <div className="flex items-center gap-1">
          <Heart size="15" />
          <span>{likes?.data?.likes || 0}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
