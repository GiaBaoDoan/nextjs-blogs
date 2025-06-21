"use client";

import TagForm from "@/components/tags/TagForm";
import Back from "@/components/ui/back";
import useAsyncAction from "@/hooks/useAction";

import { TagSchemaType } from "@/schema/tag.schema";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getTagById } from "@/store/thunk/get-detail-tag";
import { updateTag } from "@/store/thunk/update-tag";
import { Tag } from "@/types/tag.type";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function TagEditPage() {
  const { tag } = useAppSelector((state) => state.TagReducer);
  const dispatch = useAppDispatch();

  const { id } = useParams();
  const { execute, isLoading } = useAsyncAction();

  const onSubmit = (data: TagSchemaType) => {
    execute({
      actionCreator: () => updateTag({ id: id as string, data }),
    });
  };

  useEffect(() => {
    dispatch(getTagById(id as string));
  }, [dispatch, id]);

  return (
    <div className="container">
      <Back text="Edit tag" />
      <TagForm tag={tag as Tag} onSubmit={onSubmit} isSubmiting={isLoading} />
    </div>
  );
}
