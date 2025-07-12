"use client";

import Link from "next/link";
import AlertBox from "@/components/ui/alert-box";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
  SignupType,
  SignupFormSchema,
  defaultValues,
} from "@/schema/signup.schema";
import { useSignup } from "@/hooks/useAuth";

export function SignupForm() {
  const form = useForm<SignupType>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues,
  });

  const { mutate, isPending, isError, error, isSuccess, data } = useSignup();

  async function onSubmit(data: SignupType) {
    mutate(data);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900 p-4">
      <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 space-y-6">
        {/* Header */}
        <div className="text-left space-y-1">
          <h3>Create a new account</h3>
          <p className="text-gray-500 text-xs dark:text-gray-400">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-blue-600 font-medium hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              disabled={isPending}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              disabled={isPending}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              disabled={isPending}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {isError && <AlertBox message={error.message} type="error" />}
            {isSuccess && <AlertBox message={data.message} type="success" />}

            {/* Divider */}
            <div className="flex items-center justify-between gap-3">
              <hr className="flex-grow border-slate-200 dark:border-slate-700" />
              <span className="text-sm text-gray-400 dark:text-gray-500">
                or
              </span>
              <hr className="flex-grow border-slate-200 dark:border-slate-700" />
            </div>

            {/* OAuth */}
            <div className="space-y-3">
              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-md border border-gray-300 dark:border-slate-700 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 transition"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
                Sign up with Google
              </button>
            </div>

            {/* Accept terms */}
            <div className="flex items-start space-x-2 text-sm">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 rounded border-gray-300 dark:border-slate-600"
              />
              <label
                htmlFor="terms"
                className="text-gray-600 dark:text-gray-300"
              >
                I accept the{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Terms and Conditions
                </a>
              </label>
            </div>

            <Button
              className="w-full"
              disabled={isPending}
              type="submit"
              variant="primary"
            >
              Đăng ký tài khoản
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
