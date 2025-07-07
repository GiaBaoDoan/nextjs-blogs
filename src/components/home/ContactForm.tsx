"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, SendHorizonal } from "lucide-react";

// 1️⃣ Zod validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Tên tối thiểu 2 ký tự"),
  email: z.string().email("Email không hợp lệ"),
  phone: z
    .string()
    .min(9, "Số điện thoại tối thiểu 9 chữ số")
    .regex(/^\d+$/, "Số điện thoại chỉ chứa số"),
  message: z.string().min(10, "Nội dung tối thiểu 10 ký tự"),
});

type ContactValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const [serverError, setServerError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  async function onSubmit(values: ContactValues) {
    try {
      setServerError(null);
      // TODO: call API
      await new Promise((r) => setTimeout(r, 1200));
      setSent(true);
    } catch (e) {
      setServerError("Đã xảy ra lỗi, thử lại sau!");
    }
  }

  if (sent) {
    return (
      <p className="rounded-md bg-green-50 px-4 py-3 text-center text-sm text-green-700 dark:bg-green-900/20 dark:text-green-300">
        Cảm ơn bạn! Mình đã nhận được tin nhắn và sẽ phản hồi sớm nhất.
      </p>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-7 bg-white"
      >
        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm">Tên</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Tên của bạn"
                  className="h-12 text-base"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <div className="grid grid-cols-2 gap-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm ">Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="Email của bạn"
                    className="h-12 text-base"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm">Số điện thoại</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    inputMode="tel"
                    placeholder="Số điện thoại"
                    className="h-12 text-base"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm">Nội dung</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  rows={6}
                  placeholder="Nội dung tin nhắn..."
                  className="text-base min-h-[100px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {serverError && (
          <p className="text-sm text-red-600 dark:text-red-400">
            {serverError}
          </p>
        )}

        <Button
          type="submit"
          variant="primary"
          disabled={form.formState.isSubmitting}
          size="lg"
        >
          {form.formState.isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Đang gửi...
            </>
          ) : (
            <>
              <SendHorizonal className="h-4 w-4" /> Gửi tin nhắn
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
