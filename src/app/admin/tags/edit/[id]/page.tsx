"use client";

import TagForm from "@/components/tags/TagForm";
import Back from "@/components/ui/back";

import { useTag, useUpdateTag } from "@/hooks/useTag";
import { Tag } from "@/types/tag.type";
import { useParams } from "next/navigation";

export default function TagEditPage() {
  const { id } = useParams();
  const { data } = useTag(id as string);
  const updateTag = useUpdateTag(id as string);

  return (
    <div className="container">
      <Back text="Edit tag" />
      <TagForm
        tag={data?.data as Tag}
        onSubmit={updateTag.mutate}
        isSubmiting={false}
      />
    </div>
  );
}
