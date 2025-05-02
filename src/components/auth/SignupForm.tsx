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
import SignupFormSchema, { SignupType } from "@/schema/signup.schema";
import { SignupThunk } from "@/store/thunk/signup";
import useAsyncAction from "@/hooks/useAction";

export function SignupForm() {
  const form = useForm<SignupType>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  const { execute } = useAsyncAction();

  function onSubmit(data: SignupType) {
    execute({
      actionCreator: () => SignupThunk(data),
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
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tên</FormLabel>
                  <FormControl>
                    <Input placeholder="Nguyễn Văn A" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
            <Button className="text-center w-full" type="submit">
              Tạo tài khoản
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="justify-center text-sm hover:underline">
        <Link href={"/auth/login"}>Bạn đã có tài khoản ?</Link>
      </CardFooter>
    </Card>
  );
}
