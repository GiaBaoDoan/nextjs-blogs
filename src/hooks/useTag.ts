import * as TagApi from "@/services/tag.service";
import { TagSchemaType } from "@/schema/tag.schema";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const useTags = () => {
  return useQuery({
    queryKey: ["tags"],
    queryFn: TagApi.getTags,
  });
};

export const useTag = (id: string) => {
  return useQuery({
    queryKey: ["tag", id],
    queryFn: () => TagApi.getTag(id),
    enabled: !!id,
  });
};

export const useCreateTag = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: TagSchemaType) => TagApi.createTag(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tags"] });
    },
  });
};

export const useUpdateTag = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: TagSchemaType) => TagApi.updateTag(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tags"] });
    },
  });
};

export const useDeleteTag = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => TagApi.deleteTag(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tags"] });
    },
  });
};
