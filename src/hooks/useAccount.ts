import { AvatarFormType } from "@/schema/avatar.schema";
import { ProfileType } from "@/schema/profile.schema";
import { SecuritySchemaType } from "@/schema/security.schema";
import {
  getAccount,
  updateAvatar,
  updateProfile,
  updatePassword,
} from "@/services/account.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useFetchAccount = () => {
  return useQuery({
    queryKey: ["account"],
    queryFn: getAccount,
    staleTime: 60 * 1000,
  });
};

export function useUpdateAvatar() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: AvatarFormType) => updateAvatar(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["account"] });
    },
  });
}

export function useUpdateProfile() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: ProfileType) => updateProfile(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["account"] });
    },
  });
}
export function useUpdatePassword() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: SecuritySchemaType) => updatePassword(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["account"] });
    },
  });
}
