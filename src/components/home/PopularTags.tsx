"use client";

import { Sparkles } from "lucide-react";
import { useTags } from "@/hooks/useTag";
import Link from "next/link";

const PopularTags = () => {
  const { data: tags } = useTags();

  return (
    <section className="py-10 container  bg-indigo-50 rounded-2xl my-10">
      <article className="mx-auto max-w-xl">
        <h2 className="mb-3 flex justify-center items-center gap-2">
          <Sparkles className="w-5 h-5 text-yellow-500" /> Những chủ đề hay
          <Sparkles className="w-5 h-5 text-yellow-500" />
        </h2>
        <p className="text-muted-foreground text-sm mb-6 text-center">
          Khám phá các bài viết chuyên sâu về thiết kế web, lập trình, công nghệ
          và những chia sẻ thực tế từ hành trình phát triển phần mềm.
        </p>
      </article>
      <div className="flex flex-wrap justify-center gap-2 px-10">
        {tags?.data?.map((tag, index) => (
          <Link
            key={index}
            href={`/tags/${tag.slug}#`}
            className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center"
          >
            #{tag.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopularTags;
