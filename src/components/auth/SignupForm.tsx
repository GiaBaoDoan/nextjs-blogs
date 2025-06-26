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
    <Card className="w-1/3">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl">🔐 Tài khoản</CardTitle>
        <CardDescription>Chào mừng bạn đến với LapTrinhNextJS</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="username"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tên</FormLabel>
                  <FormControl>
                    <Input placeholder="Họ và Tên" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              disabled={isPending}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="*******" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {isError && <AlertBox message={error.message} type={"error"} />}
            {isSuccess && <AlertBox message={data.message} type={"success"} />}

            <Button
              disabled={isPending}
              className="text-center w-full"
              type="submit"
            >
              Đăng ký
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="justify-center text-xs text-red-600 hover:underline">
        <Link href={"/auth/login"}>Bạn đã có tài khoản ?</Link>
      </CardFooter>
    </Card>
  );
}
