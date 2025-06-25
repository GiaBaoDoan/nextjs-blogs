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

const Profile = ({ account }: { account: User }) => {
  const form = useForm<ProfileType>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
  });

  const updateProfile = useUpdateProfile();

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
          <form
            onSubmit={form.handleSubmit((data: ProfileType) =>
              updateProfile.mutate(data)
            )}
            className="space-y-6 "
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="flex">
                  <FormLabel className="w-40">Họ tên</FormLabel>
                  <div className="w-[500px]">
                    <FormControl>
                      <Input placeholder="Nguyễn văn A" {...field} />
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

            <Button variant="secondary" type="submit">
              Lưu lại
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Profile;
