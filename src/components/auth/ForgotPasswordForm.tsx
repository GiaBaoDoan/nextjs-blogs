"use client";

import AlertBox from "@/components/ui/alert-box";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  ForgotPasswordSchema,
  ForgotPasswordSchemaType,
} from "@/schema/forgot-password.schema";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { defaultValues } from "@/schema/login.schema";
import { useForgotPassword } from "@/hooks/useAuth";
import Link from "next/link";

const ForgotPasswordForm = () => {
  const form = useForm<ForgotPasswordSchemaType>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues,
  });

  const { data, mutate, isError, isSuccess, error, isPending } =
    useForgotPassword();

  const onSubmit = (data: ForgotPasswordSchemaType) => {
    mutate(data);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 space-y-6">
        {/* Header */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Quên mật khẩu ?
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Nhập email bạn đã dùng để đăng ký tài khoản. Chúng tôi sẽ gửi cho
            bạn một liên kết để đặt lại mật khẩu.
          </p>
        </div>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              disabled={isPending}
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Email của bạn"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {isError && <AlertBox message={error?.message} type="error" />}
            {isSuccess && <AlertBox message={data.message} type="success" />}

            <Button
              className="w-full"
              disabled={isPending}
              type="submit"
              variant="primary"
            >
              Gửi liên kết đặt lại mật khẩu
            </Button>
          </form>
        </Form>

        {/* Footer */}
        <div className="text-center text-sm">
          <span className="text-gray-600 dark:text-gray-300">Quay lại? </span>
          <Link href="/auth/login" className="text-blue-600 hover:underline">
            Đăng nhập
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
