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

import { SignupType, SignupFormSchema } from "@/schema/signup.schema";
import { useState } from "react";
import { HttpError } from "@/types";
import { AxiosError } from "axios";
import AlertBox from "@/components/ui/alert-box";
import { useSignup } from "@/hooks/useAuth";

export function SignupForm() {
  const form = useForm<SignupType>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const signupMutation = useSignup();

  async function onSubmit(data: SignupType) {
    setMessage("");
    setIsError(false);

    signupMutation.mutate(data, {
      onSuccess: (res) => {
        setMessage(res.message);
        setIsError(false);
      },
      onError: (err) => {
        const error = err as AxiosError<HttpError>;
        setMessage(error.response?.data.message || "Đăng ký thất bại.");
        setIsError(true);
      },
    });
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
              disabled={isLoading}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tên</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              disabled={isLoading}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              disabled={isLoading}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <AlertBox message={message} type={isError ? "error" : "success"} />
            <Button
              disabled={isLoading}
              className="text-center w-full p-7"
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
