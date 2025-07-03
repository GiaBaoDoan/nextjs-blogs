"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useCreateComment } from "@/hooks/useComments";

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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import SuccessToast from "@/components/custom/SuccessToast";
import Link from "next/link";

export default function CommentForm({ blogId }: { blogId: string }) {
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
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    className="min-h-[120px] border-slate-300"
                    placeholder="Viết bình luận của bạn..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="p-7" type="submit">
            Gửi bình luận <Send className="ml-2" />
          </Button>
        </form>
      </Form>
    </section>
  );
}
