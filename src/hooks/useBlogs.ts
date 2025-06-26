import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import * as postApi from "@/services/blog.service";
import { BlogSchemaType } from "@/schema/blog.schema";

export function usePosts(queries: any) {
  return useQuery({
    queryKey: ["posts", queries],
    queryFn: () => postApi.getPosts(queries),
    staleTime: 60 * 1000,
  });
}

export function usePost(id: string) {
  return useQuery({
    queryKey: ["post", id],
    queryFn: () => postApi.getPostById(id),
    enabled: !!id,
  });
}

export function useCreatePost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: BlogSchemaType) => postApi.createPost(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
}

export function useUpdatePost(id: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: BlogSchemaType) => postApi.updatePost(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["post", id] });
    },
  });
}

export function useDeletePost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postApi.deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
}
