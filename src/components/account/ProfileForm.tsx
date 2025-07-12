"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@/types/user.type";
import {
  profileFormSchema,
  ProfileType,
  defaultValues,
} from "@/schema/profile.schema";
import { useUpdateProfile } from "@/hooks/useAccount";

import SuccessToast from "@/components/custom/SuccessToast";
import { useSession } from "next-auth/react";

const Profile = ({ account }: { account: User }) => {
  const form = useForm<ProfileType>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
  });

  const { mutate, isPending } = useUpdateProfile();

  const { data: session, update } = useSession();

  const onSubmit = (data: ProfileType) => {
    mutate(data, {
      onSuccess: (res) => {
        SuccessToast(res.message);
        update({ name: data.username, ...session?.user });
      },
    });
  };

  useEffect(() => {
    if (account) {
      form.reset(account);
    }
  }, [form, account]);

  return (
    <section className="rounded-xl border bg-card text-card-foreground shadow mb-8 scroll-mt-20 flex-1">
      <div className="p-5 space-y-5">
        <h4>Hồ sơ</h4>
        <hr />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 ">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex">
                  <FormLabel className="w-40">Họ tên</FormLabel>
                  <div className="w-[500px]">
                    <FormControl>
                      <Input
                        disabled={isPending}
                        placeholder="Nguyễn văn A"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="flex">
                  <FormLabel className="w-40">Số điện thoại</FormLabel>
                  <div className="w-[500px]">
                    <FormControl>
                      <Input
                        disabled={isPending}
                        placeholder="Điền số điện thoại của bạn"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <Button disabled={isPending} variant="secondary" type="submit">
              Lưu lại
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Profile;
