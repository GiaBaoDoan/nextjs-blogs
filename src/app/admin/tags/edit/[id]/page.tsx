"use client";

import TagForm from "@/components/tags/TagForm";
import Back from "@/components/ui/back";

import { useTag, useUpdateTag } from "@/hooks/useTag";
import { TagSchemaType } from "@/schema/tag.schema";
import { Tag } from "@/types/tag.type";
import { CircleCheck } from "lucide-react";
import { useParams } from "next/navigation";
import { toast } from "sonner";

export default function TagEditPage() {
  const { id } = useParams();
  const { data } = useTag(id as string);
  const { mutate, isPending } = useUpdateTag(id as string);

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
      <Back text="Edit tag" />
      <TagForm
        tag={data?.data as Tag}
        onSubmit={onSubmit}
        isSubmiting={isPending}
      />
    </div>
  );
}
