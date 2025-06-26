"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
} from "@/components/ui/form";
import ImageUpload from "@/components/ui/image-upload";
import { useUpdateAvatar } from "@/hooks/useAccount";
import {
  AvatarForm,
  AvatarFormType,
  defaultValues,
} from "@/schema/avatar.schema";
import { User } from "@/types/user.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheck } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const Avatar = ({ account }: { account: User }) => {
  const form = useForm<AvatarFormType>({
    resolver: zodResolver(AvatarForm),
    defaultValues,
  });

  const { mutate, isPending } = useUpdateAvatar();

  const onSubmit = (data: AvatarFormType) => {
    mutate(data, {
      onSuccess: (res) => {
        toast("Thành công", {
          icon: <CircleCheck size={20} color="white" fill="black" />,
          description: res.message,
        });
      },
    });
  };

  useEffect(() => {
    if (account) {
      form.reset(account);
    }
  }, [account, form]);

  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow mb-8 scroll-mt-20 flex-1">
      <div className="p-5 space-y-5">
        <h4>Ảnh đại diện</h4>
        <hr />
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} action="">
              <FormField
                control={form.control}
                name="image"
                render={({ field: { onChange, value } }) => (
                  <FormItem>
                    <div>
                      <FormControl>
                        <div className="w-[300px] space-y-2">
                          <ImageUpload onChange={onChange} value={value} />
                          <FormDescription>Vui lòng thêm ảnh</FormDescription>
                        </div>
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />

              <Button disabled={isPending} className="mt-5" variant="secondary">
                Cập nhật
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
