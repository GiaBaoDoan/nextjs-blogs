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
import UserFormSchema, {
  UserDefaultValues,
  UserFormType,
} from "@/schema/user.schema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useEffect } from "react";
import useAsyncAction from "@/hooks/useAction";
import { updateUser } from "@/store/thunk/updateUser";
import { useParams } from "next/navigation";

export function UserForm({ user }: { user: UserFormType }) {
  const form = useForm<UserFormType>({
    resolver: zodResolver(UserFormSchema),
    defaultValues: user || UserDefaultValues,
  });

  const { id } = useParams();

  const { execute, isLoading } = useAsyncAction();

  const onSubmit = (data: UserFormType) => {
    execute({
      actionCreator: () => updateUser({ id: `${id}`, data }),
    });
  };

  useEffect(() => {
    if (user) {
      form.reset(user);
    }
  }, [form, user]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-5">
        <section className="grid grid-cols-3 gap-5 items-start">
          <div className="border p-5 rounded-lg space-y-8 shadow col-span-2">
            <FormField
              control={form.control}
              name="email"
              disabled={isLoading}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <p>{field.value}</p>
                  </FormLabel>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              disabled={isLoading}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Họ tên</FormLabel>
                  <FormControl>
                    <Input placeholder="Họ tên" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              disabled={isLoading}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Địa chỉ</FormLabel>
                  <FormControl>
                    <Input placeholder="Địa chỉ" {...field} />
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
                  <FormLabel>Mật khẩu</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bio"
              disabled={isLoading}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Textarea className="min-h-[150px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="border p-5 rounded-lg space-y-5 shadow">
            <FormField
              control={form.control}
              name="isAdmin"
              disabled={isLoading}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quyền</FormLabel>
                  <Select
                    value={`${field.value}`}
                    onValueChange={(val) => field.onChange(val === "true")}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Quyền" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="true">Admin</SelectItem>
                      <SelectItem value="false">Người dùng</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              disabled={isLoading}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>

                  <Select
                    value={`${field.value}`}
                    onValueChange={(val) => field.onChange(val === "true")}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a verified email to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="true">Hiển thị</SelectItem>
                      <SelectItem value="false">Ẩn danh</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isLoading} className="w-full" type="submit">
              Cập nhật
            </Button>
          </div>
        </section>
      </form>
    </Form>
  );
}
