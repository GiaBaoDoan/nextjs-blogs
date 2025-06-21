"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import slugify from "slugify";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useEffect } from "react";
import {
  TagDefaultValues,
  TagFormSchema,
  TagSchemaType,
} from "@/schema/tag.schema";

interface Props {
  tag?: TagSchemaType;
  onSubmit: (data: TagSchemaType) => void;
  isSubmiting: boolean;
}

const TagForm = ({ onSubmit, tag, isSubmiting }: Props) => {
  const form = useForm<TagSchemaType>({
    resolver: zodResolver(TagFormSchema),
    defaultValues: tag || TagDefaultValues,
  });

  const generateSlug = () => {
    form.setValue("slug", slugify(form.getValues("name")));
  };

  useEffect(() => {
    if (tag) {
      form.reset(tag);
    }
  }, [tag, form]);

  return (
    <div className="border p-5 rounded-lg w-[40rem] shadow space-y-4">
      <h4>Thông tin</h4>
      <hr />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 flex flex-col"
        >
          <FormField
            disabled={isSubmiting}
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex">
                <FormLabel className="w-40">Tên</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            disabled={isSubmiting}
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem className="flex">
                <FormLabel className="w-40">Slug</FormLabel>
                <div className="flex w-full gap-2">
                  <FormControl>
                    <Input {...field} />
                  </FormControl>

                  <Button
                    variant="secondary"
                    onClick={generateSlug}
                    type="button"
                  >
                    Generate
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            onClick={() => form.handleSubmit(onSubmit)}
            type="submit"
            disabled={isSubmiting}
            className="px-3 self-end mt-5"
          >
            Lưu Tag
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default TagForm;
