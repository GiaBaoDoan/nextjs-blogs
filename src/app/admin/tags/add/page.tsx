"use client";

import TagForm from "@/components/tags/TagForm";
import Back from "@/components/ui/back";
import { useCreateTag } from "@/hooks/useTag";

const TagAddPage = () => {
  const createTag = useCreateTag();
  return (
    <div className="container">
      <Back text="Thêm danh mục" />
      <TagForm onSubmit={createTag.mutate} isSubmiting={false} />
    </div>
  );
};

export default TagAddPage;
