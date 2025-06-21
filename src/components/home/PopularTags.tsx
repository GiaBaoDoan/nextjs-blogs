"use client";

import { useEffect } from "react";
import { getAllTags } from "@/store/thunk/get-list-tags";
import { useAppDispatch, useAppSelector } from "@/store/store";
import Link from "next/link";
import { Sparkles } from "lucide-react";

const PopularTags = () => {
  const dispatch = useAppDispatch();

  const { tags } = useAppSelector((state) => state.TagListReducer);

  useEffect(() => {
    dispatch(getAllTags());
  }, [dispatch]);

  return (
    <section className="py-10 bg-indigo-50 rounded-2xl my-10">
      <div className="container text-center">
        <h2 className="mb-3 font-bold flex justify-center items-center gap-2">
          <Sparkles className="w-5 h-5 text-yellow-500" /> Những chủ đề hay
          <Sparkles className="w-5 h-5 text-yellow-500" />
        </h2>
        <p className="text-muted-foreground text-sm mb-6">
          Khám phá những chủ đề đang được cộng đồng quan tâm nhất
        </p>
        <div className="flex flex-wrap justify-center gap-3 px-10">
          {tags.map((tag, index) => (
            <div key={index}>
              <Link
                href={`/tags/${tag.slug}`}
                className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center"
              >
                # {tag.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTags;
