import * as LikePostService from "@/services/like.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useFetchLikeList(blogId: string) {
  return useQuery({
    queryKey: ["likes", blogId],
    queryFn: () => LikePostService.getLikeList(blogId),
    enabled: !!blogId,
  });
}

export function useUpdateLike(blogId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (blogId: string) => LikePostService.updateStatusLike(blogId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["likes", blogId] });
    },
  });
}
