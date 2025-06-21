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
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useEffect } from "react";
import { User } from "@/types/user.type";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateProfile } from "@/store/thunk/update-profile";
import { getAccount } from "@/store/thunk/get-account";
import useAsyncAction from "@/hooks/useAction";

const profileFormSchema = z.object({
  username: z.string().min(2).max(50),
  phone: z.string().min(9),
});

export type ProfileType = z.infer<typeof profileFormSchema>;

const Profile = () => {
  const form = useForm<ProfileType>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      username: "",
      phone: "",
    },
  });

  const { account } = useAppSelector((state) => state.AccountReducer);
  const { execute, isLoading } = useAsyncAction();

  const dispatch = useAppDispatch();
  const onSubmit = (data: ProfileType) => {
    execute({
      actionCreator: () => updateProfile(data),
      callBack: () => dispatch(getAccount()),
    });
  };

  useEffect(() => {
    if (account) {
      form.reset(account as User);
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
              disabled={isLoading}
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
              disabled={isLoading}
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

            <Button disabled={isLoading} variant="secondary" type="submit">
              Lưu lại
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Profile;
