"use client";

import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useDeleteComment, useFetchCommentList } from "@/hooks/useComments";
import SuccessToast from "@/components/custom/SuccessToast";
import ErrorToast from "@/components/custom/ErrorToast";
import Action from "@/components/ui/action";
import Image from "next/image";
import { useSession } from "next-auth/react";

const CommentList = ({ blogId }: { blogId: string }) => {
  const { data: comments } = useFetchCommentList(blogId);

  const { data: session } = useSession();

  const { mutate } = useDeleteComment();

  const onDeleteComment = (id: string) => {
    mutate(
      { blogId, id },
      {
        onSuccess: (res) => SuccessToast(res.message),
        onError: (err: any) => ErrorToast(err.response.data.message),
      }
    );
  };

  return (
    <div className="space-y-10 mt-10">
      <h2 className="font-bold">{comments?.data?.length} bình luận</h2>
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
                <Image
                  src={comment.user?.image || "/default-avatar.png"}
                  alt="Ảnh người bình luận"
                  width={200}
                  height={200}
                  className="rounded-full w-8 h-8 object-cover"
                />
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
                <Action id={comment._id} onDelete={onDeleteComment} />
              )}
            </div>

            <div className="text-sm pt-2 leading-relaxed text-foreground">
              {comment.content}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
