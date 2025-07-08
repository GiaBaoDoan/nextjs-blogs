"use client";

import { useTags } from "@/hooks/useTag";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const PopularTags = () => {
  const { data: tags } = useTags();

  return (
    <div className="container">
      <section
        className="
        border-2 border-dashed border-indigo-300/60
        dark:border-indigo-600/40
        rounded-xl p-6 md:p-8
        bg-white/70 dark:bg-gray-800/50
        backdrop-blur-sm
      "
      >
        <div className="flex flex-wrap justify-center gap-1 px-10">
          {tags?.data?.map((tag, index) => (
            <Link key={index} href={`/tags/${tag.slug}#`}>
              <Badge variant="primary">#{tag.name}</Badge>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PopularTags;
