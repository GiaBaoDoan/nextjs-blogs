"use client";

import Link from "next/link";

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
import { LoginSchemaType, LoginFormSchema } from "@/schema/login.schema";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AlertBox from "@/components/ui/alert-box";

export function LoginForm() {
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function onSubmit(data: LoginSchemaType) {
    setIsLoading(true);

    const res = await signIn("credentials", {
      ...data,
      redirect: false,
    });

    if (!res?.ok) {
      setMessage(res?.error as string);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      router.push("/");
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
              disabled={isLoading}
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
              disabled={isLoading}
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
              className="text-xs inline-block hover:underline text-red-600"
              href={"/auth/forgot-password"}
            >
              Quên mật khẩu ?
            </Link>
            <AlertBox message={message} type={"error"} />
            <Button disabled={isLoading} className="w-full p-7" type="submit">
              Đăng nhập
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="justify-center text-xs hover:underline text-red-600">
        <Link href={"/auth/signup"}>Bạn chưa có tài khoản ?</Link>
      </CardFooter>
    </Card>
  );
}
