"use client";

import AlertBox from "@/components/ui/alert-box";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useResetPassword } from "@/hooks/useAuth";
import {
  ResetPasswordSchema,
  ResetPasswordSchemaType,
  defaultValues,
} from "@/schema/reset-password.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";

const ResetPasswordForm = () => {
  const form = useForm<ResetPasswordSchemaType>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues,
  });

  const { id, token } = useParams();

  const { mutate, isError, isSuccess, error, data } = useResetPassword();

  const onSubmit = (data: ResetPasswordSchemaType) => {
    mutate({
      id: id as string,
      token: token as string,
      data,
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 space-y-6">
        {/* Header */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Đặt lại mật khẩu
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Nhập mật khẩu mới của bạn bên dưới. Mật khẩu cần có độ mạnh vừa đủ
            để đảm bảo an toàn.
          </p>
        </div>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mật khẩu mới</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Xác nhận mật khẩu</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {isError && <AlertBox message={error.message} type="error" />}
            {isSuccess && <AlertBox message={data.message} type="success" />}

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Xác nhận đặt lại mật khẩu
            </Button>
          </form>
        </Form>

        {/* Footer */}
        <div className="text-center text-sm">
          <span className="text-gray-600 dark:text-gray-300">
            Nhớ mật khẩu?{" "}
          </span>
          <a href="/auth/login" className="text-blue-600 hover:underline">
            Đăng nhập
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
