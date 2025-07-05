"use client";

import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  useDeleteComment,
  useFetchCommentList,
  useUpdateComment,
} from "@/hooks/useComments";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { CommentAction } from "@/components/comments/CommentAction";

import SuccessToast from "@/components/custom/SuccessToast";
import ErrorToast from "@/components/custom/ErrorToast";
import UserAvatar from "@/components/users/UserAvatar";
import CommentEditForm from "@/components/comments/CommentEditForm";

const CommentList = ({ blogId }: { blogId: string }) => {
  const { data: comments } = useFetchCommentList(blogId);

  const { data: session } = useSession();

  const [commentId, setEditingId] = useState("");

  const { mutate } = useDeleteComment();

  const onDeleteComment = (id: string) => {
    mutate(
      { blogId, id },
      {
        onSuccess: (res) => SuccessToast(res.message),
        onError: (err) => ErrorToast(err.message),
      }
    );
  };

  return (
    <section id="comments" className="mb-5 space-y-10">
      <h2>{comments?.data?.length} bình luận</h2>
      {comments?.data?.map((comment, index) => {
        const isLast = index === (comments?.data?.length as number) - 1;

        return (
          <div
            key={comment._id}
            className={cn(
              "flex flex-col gap-2 pb-6",
              !isLast && "border-b border-slate-200",
              isLast && "pb-0"
            )}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <UserAvatar avatar={comment.user.image} />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {comment.user?.username}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {format(new Date(comment.createdAt), "HH:mm dd/MM/yyyy")}
                  </p>
                </div>
              </div>

              {session?.user?.id === comment.user._id && (
                <CommentAction
                  id={comment._id}
                  onEdit={(id: string) => setEditingId(id)}
                  onDelete={(id: string) => onDeleteComment(id)}
                />
              )}
            </div>

            {comment._id === commentId ? (
              <CommentEditForm
                commentId={comment._id}
                onEdit={setEditingId}
                blogId={blogId}
                content={comment.content}
              />
            ) : (
              <blockquote className="text-sm leading-relaxed text-foreground">
                {comment.content}
              </blockquote>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default CommentList;
