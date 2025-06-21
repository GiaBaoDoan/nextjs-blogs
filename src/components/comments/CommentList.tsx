"use client";

import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { format } from "date-fns";
import { useEffect } from "react";
import { getCommentList } from "@/store/thunk/get-list-comments";
import UserAvatar from "@/components/users/UserAvatar";

const CommentList = () => {
  const { comments } = useAppSelector((state) => state.CommentListReducer);
  const { blog } = useAppSelector((state) => state.BlogReducer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCommentList({ blogId: blog?._id as string }));
  }, [blog, dispatch]);

  return (
    <div className="space-y-10 mt-10">
      <h2 className="font-bold">{comments.length} bình luận</h2>
      {comments.map((comment, index) => {
        const isLast = index === comments.length - 1;

        return (
          <div
            key={comment._id}
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
