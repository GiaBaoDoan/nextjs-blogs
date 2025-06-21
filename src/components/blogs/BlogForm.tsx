"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import slugify from "slugify";
import QuillEditor from "@/components/ui/editor";
import ImageUpload from "@/components/ui/image-upload";

import { useAppDispatch, useAppSelector } from "@/store/store";
import { getAllTags } from "@/store/thunk/get-list-tags";
import { getAllCategory } from "@/store/thunk/get-list-categories";

import {
  BlogDefaultValues,
  BlogFormSchema,
  BlogSchemaType,
} from "@/schema/blog.schema";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { MultiSelectCombobox } from "@/components/ui/combobox";

type BlogFormProps = {
  onSubmit: (data: BlogSchemaType) => void;
  isSubmiting: boolean;
  blog?: BlogSchemaType;
};

export function BlogForm({ onSubmit, isSubmiting, blog }: BlogFormProps) {
  const form = useForm<BlogSchemaType>({
    defaultValues: BlogDefaultValues,
    resolver: zodResolver(BlogFormSchema),
  });

  const dispatch = useAppDispatch();
  const { tags } = useAppSelector((state) => state.TagListReducer);
  const { categories } = useAppSelector((state) => state.CategoryListReducer);

  useEffect(() => {
    if (!tags.length) dispatch(getAllTags());
    if (!categories.length) dispatch(getAllCategory());
  }, [dispatch, categories, tags]);

  useEffect(() => {
    if (blog) form.reset(blog);
  }, [blog, form]);

  const generateSlug = () => {
    const title = form.getValues("title");
    form.setValue(
      "slug",
      slugify(title, { lower: true, locale: "vi", strict: true })
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-5">
        <main className="grid grid-cols-3 gap-5 items-start">
          <section className="col-span-2 space-y-10">
            <div className="border shadow rounded-lg p-5 space-y-6">
              <h3 className="font-semibold">Thông tin</h3>
              <hr />

              <FormField
                control={form.control}
                name="thumbnail"
                render={({ field: { onChange, value } }) => (
                  <FormItem className="flex">
                    <FormLabel className="w-40">Image</FormLabel>
                    <div className="flex-1 space-y-2">
                      <FormControl>
                        <ImageUpload onChange={onChange} value={value} />
                      </FormControl>
                      <FormDescription>Vui lòng thêm ảnh</FormDescription>
                    </div>
                  </FormItem>
                )}
              />

              {/* Tiêu đề */}
              <FormField
                control={form.control}
                name="title"
                disabled={isSubmiting}
                render={({ field }) => (
                  <FormItem className="flex">
                    <FormLabel className="w-40">Tiêu đề</FormLabel>
                    <div className="flex-1 space-y-2">
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              {/* Slug */}
              <FormField
                control={form.control}
                name="slug"
                disabled={isSubmiting}
                render={({ field }) => (
                  <FormItem className="flex">
                    <FormLabel className="w-40">Slug</FormLabel>
                    <div className="flex-1 space-y-2">
                      <div className="flex gap-2">
                        <FormControl className="flex-1">
                          <Input {...field} />
                        </FormControl>

                        <Button
                          type="button"
                          variant="secondary"
                          onClick={generateSlug}
                        >
                          Generate
                        </Button>
                      </div>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              {/* Mô tả */}
              <FormField
                control={form.control}
                name="description"
                disabled={isSubmiting}
                render={({ field }) => (
                  <FormItem className="flex">
                    <FormLabel className="w-40">Mô tả</FormLabel>
                    <div className="flex-1 space-y-2">
                      <FormControl>
                        <Textarea className="min-h-24" {...field} />
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              {/* Nội dung */}
              <FormField
                control={form.control}
                name="content"
                disabled={isSubmiting}
                render={({ field: { value, onChange } }) => (
                  <FormItem className="gap-0">
                    <FormLabel className="mb-3">Nội dung</FormLabel>
                    <QuillEditor value={value} onChange={onChange} />
                    <FormMessage className="mt-2" />
                  </FormItem>
                )}
              />
            </div>

            {/* SEO */}
            <div className="border shadow rounded-lg p-5 space-y-6">
              <h3 className="font-semibold">SEO</h3>
              <hr />
              <FormField
                control={form.control}
                name="seoKeyWord"
                disabled={isSubmiting}
                render={({ field }) => (
                  <FormItem className="flex">
                    <FormLabel className="w-40">Từ khóa</FormLabel>
                    <div className="flex-1 space-y-1">
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormDescription>Ngăn cách bởi dấu phẩy</FormDescription>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="seoDescription"
                disabled={isSubmiting}
                render={({ field }) => (
                  <FormItem className="flex items-start">
                    <FormLabel className="w-40">Mô tả SEO</FormLabel>
                    <FormControl className="flex-1">
                      <Textarea className="min-h-24" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </section>

          <section className="border shadow rounded-lg p-5 space-y-6">
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Trạng thái</FormLabel>
                  <FormControl>
                    <Select
                      disabled={isSubmiting}
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Chọn trạng thái" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Nháp</SelectItem>
                        <SelectItem value="published">Công khai</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Danh mục</FormLabel>
                  <FormControl>
                    <Select
                      disabled={isSubmiting}
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat.name} value={cat._id}>
                            {cat.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tags"
              disabled={isSubmiting}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <MultiSelectCombobox
                      selected={field.value as string[]}
                      onChange={field.onChange}
                      options={tags}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isSubmiting}>
              Cập nhật
            </Button>
          </section>
        </main>
      </form>
    </Form>
  );
}
