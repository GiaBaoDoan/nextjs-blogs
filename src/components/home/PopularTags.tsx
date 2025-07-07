"use client";

import { Sparkles } from "lucide-react";
import { useTags } from "@/hooks/useTag";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const PopularTags = () => {
  const { data: tags } = useTags();

  return (
    <section className="py-12 container bg-indigo-50 rounded-2xl my-10">
      <div className="mx-auto max-w-xl text-center mb-6">
        <h2>Thẻ bài viết</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-2 px-10">
        {tags?.data?.map((tag, index) => (
          <Link key={index} href={`/tags/${tag.slug}#`}>
            <Badge variant="primary">#{tag.name}</Badge>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopularTags;
