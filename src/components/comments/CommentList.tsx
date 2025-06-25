"use client";

import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useFetchCommentList } from "@/hooks/useComments";
import UserAvatar from "@/components/users/UserAvatar";

const CommentList = ({ blogId }: { blogId: string }) => {
  const { data: comments, isLoading } = useFetchCommentList(blogId);
  if (isLoading) return "Đang tải ...";
  return (
    <div className="space-y-10 mt-10">
      <h2 className="font-bold">{comments?.data?.length} bình luận</h2>
      {comments?.data?.map((comment, index) => {
        const isLast = index === (comments?.data?.length as number) - 1;

        return (
          <div
            key={comment?._id}
            className={cn("pb-5", !isLast && "border-b", isLast && "pb-0")}
          >
            <div className="flex items-center space-x-3 mb-2">
              <UserAvatar />
              <div>
                <p className="font-semibold">{comment.username || "Ẩn danh"}</p>
                <p className="text-xs text-muted-foreground">
                  {format(new Date(comment.createdAt), "HH:mm dd/MM/yyyy")}
                </p>
              </div>
            </div>
            <p className="text-sm">{comment.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
