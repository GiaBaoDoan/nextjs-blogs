"use client";

import TagForm from "@/components/tags/TagForm";
import Back from "@/components/ui/back";
import useAsyncAction from "@/hooks/useAction";
import { TagSchemaType } from "@/schema/tag.schema";
import { postTag } from "@/store/thunk/post-tag";

const TagAddPage = () => {
  const { execute, isLoading } = useAsyncAction();

  const onSubmit = (data: TagSchemaType) => {
    execute({
      actionCreator: () => postTag(data),
    });
  };

  return (
    <div className="container">
      <Back text="Thêm danh mục" />
      <TagForm onSubmit={onSubmit} isSubmiting={isLoading} />
    </div>
  );
};

export default TagAddPage;
