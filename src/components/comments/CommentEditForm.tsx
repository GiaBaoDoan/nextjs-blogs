"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
import { X } from "lucide-react";
import { useUpdateComment } from "@/hooks/useComments";
import SuccessToast from "@/components/custom/SuccessToast";
import { useEffect } from "react";

type EditCommentProps = {
  onEdit: (commentId: string) => void;
  commentId: string;
  blogId: string;
  content: string;
};

const CommentEditForm = ({
  blogId,
  commentId,
  content,
  onEdit,
}: EditCommentProps) => {
  const form = useForm<CommentType>({
    resolver: zodResolver(CommentSchema),
    defaultValues: { content },
  });

  const { mutate, isPending } = useUpdateComment(blogId);

  const onSubmit = (data: CommentType) => {
    mutate(
      { data, id: commentId },
      {
        onSuccess: (res) => {
          SuccessToast(res.message);
          form.reset(defaultValues);
          onEdit("");
        },
        onError: (err) => SuccessToast(err.message),
      }
    );
  };

  useEffect(() => {
    if (content) {
      form.reset({ content });
    }
  }, [content, blogId, form]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex-1 space-y-5 mt-5"
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

        <div className="flex justify-end gap-2">
          <Button
            disabled={isPending}
            variant="primary"
            className="text-sm rounded-md"
            type="submit"
          >
            Cập nhật
          </Button>
          <Button
            onClick={() => onEdit("")}
            disabled={isPending}
            className="text-sm rounded-md"
            variant="secondary"
            type="button"
          >
            Hủy
            <X className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CommentEditForm;
