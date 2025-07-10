"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import {
  LoginSchemaType,
  LoginFormSchema,
  defaultValues,
} from "@/schema/login.schema";
import AlertBox from "@/components/ui/alert-box";
import { useRouter } from "next/navigation";
import { useLogin } from "@/hooks/useAuth";
import Link from "next/link";

export function LoginForm() {
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues,
  });

  const router = useRouter();

  const { mutate, isPending, isError, error } = useLogin();

  async function onSubmit(data: LoginSchemaType) {
    mutate(data, {
      onSuccess: () => {
        router.push("/");
      },
    });
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center dark:bg-slate-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 space-y-6">
        {/* Logo + Heading */}
        <div className="text-left space-y-1">
          <div className="flex justify-start">
            <h3 className="font-bold ">Welcome back</h3>
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-400">
            Start your website in seconds. Don’t have an account?{" "}
            <Link
              href="/auth/signup"
              className="text-blue-600 font-medium hover:underline"
            >
              Sign up.
            </Link>
          </p>
        </div>

        {/* Login Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="email"
                disabled={isPending}
                render={({ field }) => (
                  <FormItem className="col-span-2 sm:col-span-1">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" placeholder="Email" />
                    </FormControl>
                    <FormMessage></FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                disabled={isPending}
                render={({ field }) => (
                  <FormItem className="col-span-2 sm:col-span-1">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage></FormMessage>
                  </FormItem>
                )}
              />
            </div>

            {isError && (
              <AlertBox message={error?.message as string} type="error" />
            )}

            {/* Divider */}
            <div className="flex items-center justify-between gap-3">
              <hr className="flex-grow border-slate-200 dark:border-slate-700" />
              <span className="text-sm text-gray-400 dark:text-gray-500">
                or
              </span>
              <hr className="flex-grow border-slate-200 dark:border-slate-700" />
            </div>

            {/* OAuth Buttons */}
            <div className="space-y-3">
              <Button
                disabled={isPending}
                type="button"
                variant="outline"
                className="flex w-full items-center justify-center gap-3 rounded-md border border-gray-300 dark:border-slate-700 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 transition"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
                Sign in with Google
              </Button>
            </div>

            {/* Remember Me + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 dark:border-slate-600"
                />
                <span className="text-gray-600 dark:text-gray-300">
                  Remember me
                </span>
              </label>
              <Link
                href="/auth/forgot-password"
                className="text-blue-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <Button
              disabled={isPending}
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              Sign in to your account
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
