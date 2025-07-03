"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import { useFetchLikeList, useUpdateLike } from "@/hooks/useLikePost";
import ErrorToast from "@/components/custom/ErrorToast";

export default function LikeButton({ postId }: { postId: string }) {
  const { data } = useFetchLikeList(postId);

  const liked = data?.data?.liked;
  const likes = data?.data?.likes;

  console.log(data?.data);

  const { mutate, isPending } = useUpdateLike(postId);

  const updateStatus = () => {
    mutate(postId, {
      onError: (err) => ErrorToast(err.message),
    });
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      disabled={isPending}
      onClick={updateStatus}
      className={cn(
        "flex items-center gap-1 transition",
        liked
          ? "text-red-600 font-semibold"
          : "text-muted-foreground hover:text-red-500"
      )}
    >
      <Heart
        className={cn(
          "h-5 w-5 transition",
          liked ? "fill-red-600" : "fill-transparent"
        )}
      />
      <span>{likes || 0}</span>
    </Button>
  );
}
