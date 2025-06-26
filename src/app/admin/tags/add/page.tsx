"use client";

import SuccessToast from "@/components/custom/SuccessToast";
import TagForm from "@/components/tags/TagForm";
import Back from "@/components/ui/back";
import { useCreateTag } from "@/hooks/useTag";
import { TagSchemaType } from "@/schema/tag.schema";

const TagAddPage = () => {
  const { mutate, isPending } = useCreateTag();

  const onSubmit = (data: TagSchemaType) => {
    mutate(data, {
      onSuccess: (res) => SuccessToast(res.message),
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
