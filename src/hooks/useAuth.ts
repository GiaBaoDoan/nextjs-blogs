import * as authApi from "@/services/auth.service";
import { LoginSchemaType } from "@/schema/login.schema";
import { SignupType } from "@/schema/signup.schema";
import { useMutation, useQuery } from "@tanstack/react-query";

// Đăng nhập
export function useLogin() {
  return useMutation({
    mutationFn: (data: LoginSchemaType) => authApi.login(data),
  });
}

// Đăng ký
export function useSignup() {
  return useMutation({
    mutationFn: (data: SignupType) => authApi.signup(data),
  });
}

// Xác thực tài khoản (verify email)
export function useVerify(id: string, token: string) {
  return useQuery({
    queryKey: ["auth", "verify", id, token],
    queryFn: () => authApi.verify(id, token),
    enabled: !!id && !!token, // chỉ gọi nếu cả id và token tồn tại
  });
}
