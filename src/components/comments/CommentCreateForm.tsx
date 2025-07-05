"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";

import {
  CommentSchema,
  CommentType,
  defaultValues,
} from "@/schema/comment.schema";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Link from "next/link";
import SuccessToast from "@/components/custom/SuccessToast";
import UserAvatar from "@/components/users/UserAvatar";
import { useCreateComment } from "@/hooks/useComments";
import ButtonSecondary from "@/components/ui/button-secondary";
import ButtonPrimary from "@/components/ui/button-primary";

export default function CommentCreateForm({ blogId }: { blogId: string }) {
  const { data: session } = useSession();

  const form = useForm<CommentType>({
    resolver: zodResolver(CommentSchema),
    defaultValues,
  });

  const { mutate, isPending } = useCreateComment(blogId);

  const onSubmit = (data: CommentType) => {
    mutate(data, {
      onSuccess: (res) => {
        SuccessToast(res.message);
        form.reset(defaultValues);
      },
      onError: (err) => SuccessToast(err.message),
    });
  };

  if (!session) {
    return (
      <div className="py-10">
        <h3 className="mb-4 font-bold">Bạn cần đăng nhập để bình luận</h3>
        <Link href="/auth/login">
          <Button variant="outline">Đăng nhập</Button>
        </Link>
      </div>
    );
  }

  return (
    <section className="py-10">
      <h3 className="mb-10">Để lại bình luận</h3>
      <div className="flex items-start gap-4">
        {/* Avatar trái */}
        <UserAvatar avatar={session.user.image as string} />

        {/* Form nhập bình luận */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex-1 space-y-3"
          >
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="min-h-[100px] border border-slate-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                      placeholder="Viết bình luận của bạn..."
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={isPending}
                size="lg"
                variant="primary"
              >
                Thêm bình luận
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
