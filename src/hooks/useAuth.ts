import * as authApi from "@/services/auth.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { signOut } from "next-auth/react";

// Đăng nhập
export function useLogin() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: authApi.login,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["account"] });
    },
  });
}

export function useLogout() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => signOut(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["account"] });
    },
  });
}

// Đăng ký
export function useSignup() {
  return useMutation({
    mutationFn: authApi.signup,
  });
}

// Xác thực tài khoản (verify email)
export function useVerify(id: string, token: string) {
  return useQuery({
    queryKey: ["auth", "verify", id, token],
    queryFn: () => authApi.verify(id, token),
    enabled: !!id && !!token,
  });
}
