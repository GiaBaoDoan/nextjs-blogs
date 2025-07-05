import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as commentApi from "@/services/comment.service";
import { CommentType } from "@/schema/comment.schema";

export function useFetchCommentList(blogId: string) {
  return useQuery({
    queryKey: ["comments", blogId],
    queryFn: () => commentApi.getCommentList(blogId),
    enabled: !!blogId,
  });
}

export function useCreateComment(blogId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: CommentType) => commentApi.createComment(blogId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", blogId] });
    },
  });
}

export function useDeleteComment() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ blogId, id }: { blogId: string; id: string }) =>
      commentApi.deleteComment(blogId, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });
}

export function useUpdateComment(blogId: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { data: CommentType; id: string }) =>
      commentApi.updateComment(blogId, id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });
}
