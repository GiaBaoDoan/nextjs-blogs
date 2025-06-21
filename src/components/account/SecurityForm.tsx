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
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { updatePassword } from "@/store/thunk/update-password";
import useAsyncAction from "@/hooks/useAction";

export const SecurityFormSchema = z
  .object({
    currentPassword: z.string().min(6),
    newPassword: z.string().min(6, "Mật khẩu mới phải có ít nhất 6 ký tự"),
    repeatPassword: z.string().min(6),
  })
  .refine((data) => data.newPassword === data.repeatPassword, {
    path: ["repeatPassword"],
    message: "Mật khẩu nhập lại không khớp",
  });

export type SecuritySchemaType = z.infer<typeof SecurityFormSchema>;

const Security = () => {
  const form = useForm<SecuritySchemaType>({
    resolver: zodResolver(SecurityFormSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      repeatPassword: "",
    },
  });

  const { execute, isLoading } = useAsyncAction();

  const onSubmit = (data: SecuritySchemaType) => {
    execute({
      actionCreator: () => updatePassword(data),
    });
  };
  return (
    <section className="rounded-xl border bg-card text-card-foreground shadow mb-8 scroll-mt-20 flex-1">
      <div className="p-5 space-y-5">
        <h4>Bảo mật</h4>
        <hr />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              disabled={isLoading}
              control={form.control}
              name="currentPassword"
              render={({ field }) => (
                <FormItem className="flex">
                  <FormLabel className="w-40">Mật khẩu hiện tại</FormLabel>
                  <div className="w-[500px] space-y-2">
                    <FormControl>
                      <Input type="password" placeholder="*****" {...field} />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newPassword"
              disabled={isLoading}
              render={({ field }) => (
                <FormItem className="flex">
                  <FormLabel className="w-40">Mật khẩu mới</FormLabel>
                  <div className="w-[500px] space-y-2">
                    <FormControl>
                      <Input type="password" placeholder="*****" {...field} />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="repeatPassword"
              disabled={isLoading}
              render={({ field }) => (
                <FormItem className="flex">
                  <FormLabel className="w-40">Nhập mật khẩu mới</FormLabel>
                  <div className="w-[500px] space-y-2">
                    <FormControl>
                      <Input type="password" placeholder="*****" {...field} />
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

export default Security;
