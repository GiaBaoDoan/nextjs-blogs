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
  UserSchemaType,
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
import { UserRole, UserStatus } from "@/constants/enum";
import { useUpdateUser } from "@/hooks/useUsers";
import { useParams } from "next/navigation";

import SuccessToast from "@/components/custom/SuccessToast";

export function UserForm({ user }: { user: UserSchemaType }) {
  const form = useForm<UserSchemaType>({
    resolver: zodResolver(UserFormSchema),
    defaultValues: user || UserDefaultValues,
  });
  const { id } = useParams();

  const { mutate, isPending } = useUpdateUser(id as string);

  const onSubmit = (data: UserSchemaType) =>
    mutate(data, {
      onSuccess: (res) => SuccessToast(res.message),
    });

  useEffect(() => {
    if (user) {
      form.reset(user);
    }
  }, [form, user]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-5">
        <section className="grid grid-cols-3 gap-5 items-start">
          <div className="border p-5 rounded-lg space-y-6 shadow col-span-2">
            <div>
              <h3 className="mb-3">Thông tin</h3>
              <hr />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex">
                  <FormLabel className="w-40">Email</FormLabel>
                  <p className="text-sm w-full">{field.value}</p>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex">
                  <FormLabel className="w-40">Họ tên</FormLabel>
                  <FormControl>
                    <Input disabled={isPending} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="flex">
                  <FormLabel className="w-40">Địa chỉ</FormLabel>
                  <FormControl>
                    <Input disabled={isPending} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="flex">
                  <FormLabel className="w-40">Mật khẩu</FormLabel>
                  <FormControl>
                    <Input disabled={isPending} type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem className="flex">
                  <FormLabel className="w-40">Mô tả</FormLabel>
                  <FormControl>
                    <Textarea
                      disabled={isPending}
                      className="min-h-[80px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="border p-5 rounded-lg space-y-5 shadow">
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quyền</FormLabel>
                  <Select
                    disabled={isPending}
                    {...field}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Quyền" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value={UserRole.admin}>Admin</SelectItem>
                      <SelectItem value={UserRole.staff}>Nhân viên</SelectItem>
                      <SelectItem value={UserRole.user}>Người dùng</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select
                    disabled={isPending}
                    {...field}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value={UserStatus.PUBLIC}>
                        Công khai
                      </SelectItem>
                      <SelectItem value={UserStatus.PENDING}>
                        Chờ duyệt
                      </SelectItem>
                      <SelectItem value={UserStatus.PRIVATE}>
                        Lưu trữ
                      </SelectItem>
                      <SelectItem value={UserStatus.DRAFT}>Nháp</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={isPending} className="w-full" type="submit">
              Cập nhật
            </Button>
          </div>
        </section>
      </form>
      <div className="space-x-2"></div>
    </Form>
  );
}
