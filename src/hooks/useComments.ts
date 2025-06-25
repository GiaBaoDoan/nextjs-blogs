import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as commentApi from "@/services/comment.service";
import { CommentSchemaType } from "@/schema/comment.schema";

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
    mutationFn: (data: CommentSchemaType) =>
      commentApi.createComment(blogId, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", blogId] });
    },
  });
}

export function useDeleteComment(blogId: string, id: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => commentApi.deleteComment(blogId, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments"] });
    },
  });
}
