"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CommentFormSchema,
  CommentSchemaType,
  defaultValues,
} from "@/schema/comment.schema";
import { Input } from "@/components/ui/input";
import { CircleCheck, Send } from "lucide-react";
import { useCreateComment } from "@/hooks/useComments";
import { toast } from "sonner";

const CommentForm = ({ blogId }: { blogId: string }) => {
  const form = useForm<CommentSchemaType>({
    resolver: zodResolver(CommentFormSchema),
    defaultValues,
  });

  const createComment = useCreateComment(blogId);

  const onSubmit = (data: CommentSchemaType) => {
    createComment.mutate(data, {
      onSuccess: (res) => {
        toast("Thành công", {
          icon: <CircleCheck fill="black" size="20" color="white" />,
          description: res.message,
        });
        form.reset(defaultValues);
      },
    });
  };

  return (
    <div className="py-10">
      <h3 className="mb-10 font-bold">Để lại bình luận</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
          <div className="grid grid-cols-2 gap-2">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Họ tên</FormLabel>
                  <FormControl>
                    <Input
                      className="py-7 px-5"
                      {...field}
                      placeholder="Họ tên"
                    />
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
                    <Input
                      className="py-7 px-5"
                      {...field}
                      placeholder="Email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bình luận</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    className="min-h-[120px] border-slate-300"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="p-7" type="submit">
            Gửi bình luận <Send />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CommentForm;
