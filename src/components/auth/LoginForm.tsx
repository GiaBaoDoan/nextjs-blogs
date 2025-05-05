"use client";

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
import Link from "next/link";
import LoginFormSchema, { LoginType } from "@/schema/login.schema";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const form = useForm<LoginType>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  async function onSubmit(data: LoginType) {
    const res = await signIn("credentials", {
      redirect: false,
      ...data,
    });

    console.log(res);

    if (res?.ok) {
      router.push("/profile");
    }
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
              name="email"
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
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="*****" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Link
              className="text-sm inline-block hover:underline"
              href={"/auth/forgot-password"}
            >
              Quên mật khẩu ?
            </Link>
            <Button className="text-center w-full" type="submit">
              Đăng nhập
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="justify-center text-sm hover:underline">
        <Link href={"/auth/signup"}>Bạn chưa có tài khoản ?</Link>
      </CardFooter>
    </Card>
  );
}
