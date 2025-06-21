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
import useAsyncAction from "@/hooks/useAction";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CommentFormSchema, CommentSchemaType } from "@/schema/comment.schema";
import { postComment } from "@/store/thunk/post-comment";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { getCommentList } from "@/store/thunk/get-list-comments";

const CommentForm = () => {
  const form = useForm<CommentSchemaType>({
    resolver: zodResolver(CommentFormSchema),
    defaultValues: {
      content: "",
      email: "",
      username: "",
    },
  });

  const { blog } = useAppSelector((state) => state.BlogReducer);

  const { execute } = useAsyncAction();

  const dispatch = useAppDispatch();

  const onSubmit = (data: CommentSchemaType) => {
    execute({
      actionCreator: () =>
        postComment({
          blogId: blog?._id as string,
          data,
        }),
      callBack: () => {
        dispatch(getCommentList({ blogId: blog?._id as string })), form.reset();
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
