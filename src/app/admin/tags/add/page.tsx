"use client";

import TagForm from "@/components/tags/TagForm";
import Back from "@/components/ui/back";
import { useCreateTag } from "@/hooks/useTag";
import { TagSchemaType } from "@/schema/tag.schema";
import { CircleCheck } from "lucide-react";
import { toast } from "sonner";

const TagAddPage = () => {
  const { mutate, isPending } = useCreateTag();

  const onSubmit = (data: TagSchemaType) => {
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
    <div className="container">
      <Back text="Thêm danh mục" />
      <TagForm onSubmit={onSubmit} isSubmiting={isPending} />
    </div>
  );
};

export default TagAddPage;
