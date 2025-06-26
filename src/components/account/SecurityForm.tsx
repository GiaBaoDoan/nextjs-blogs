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
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SecurityFormSchema,
  SecuritySchemaType,
  defaultValues,
} from "@/schema/security.schema";
import { useUpdatePassword } from "@/hooks/useAccount";
import { toast } from "sonner";
import { CircleCheck } from "lucide-react";

const Security = () => {
  const form = useForm<SecuritySchemaType>({
    resolver: zodResolver(SecurityFormSchema),
    defaultValues,
  });

  const { mutate } = useUpdatePassword();

  const onSubmit = (data: SecuritySchemaType) => {
    mutate(data, {
      onSuccess: (res) => {
        toast("Thành công", {
          icon: <CircleCheck fill="black" size="20" color="white" />,
          description: res.message,
        });
      },
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

            <Button variant="secondary" type="submit">
              Lưu lại
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Security;
