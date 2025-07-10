import { ForgotPasswordSchemaType } from "@/schema/forgot-password.schema";
import { ResetPasswordSchemaType } from "@/schema/reset-password.schema";
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

// đăng xuất tài khoản
export function useLogout() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => signOut({ redirect: false }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["account"] });
    },
  });
}

// Đăng ký tài khoản
export function useSignup() {
  return useMutation({
    mutationFn: authApi.signup,
  });
}

// Xác thực tài khoản
export function useVerify(id: string, token: string) {
  return useQuery({
    queryKey: ["auth", "verify", id, token],
    queryFn: () => authApi.verify(id, token),
    enabled: !!id && !!token,
  });
}

// Gưi yêu cầu quên mật khẩu
export function useForgotPassword() {
  return useMutation({
    mutationFn: (data: ForgotPasswordSchemaType) =>
      authApi.forgotPassword(data),
  });
}

// Gưi yêu cầu quên mật khẩu
export function useResetPassword() {
  return useMutation({
    mutationFn: ({
      id,
      token,
      data,
    }: {
      id: string;
      token: string;
      data: ResetPasswordSchemaType;
    }) =>
      authApi.resetPassword({
        id,
        token,
        data,
      }),
  });
}
