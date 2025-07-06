"use client";

import Image from "next/image";
import Link from "next/link";
import Avatar from "@/public/avatar.jpg";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Hero section without Framer Motion animations.
 * Simple, fast, and still visually appealing.
 */
export default function Test() {
  return (
    <section className="bg-white dark:bg-gray-950">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-4 py-24 md:flex-row md:gap-20 lg:px-8">
        {/* Text */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl lg:text-6xl">
            Xin chào, mình là{" "}
            <span className="text-indigo-600 dark:text-indigo-400">Bảo</span> 👋
          </h1>

          <p className="mt-6 max-w-lg text-lg text-gray-600 dark:text-gray-400">
            Đây là <span className="font-semibold">blog cá nhân</span> nơi mình
            chia sẻ về lập trình web, kinh nghiệm freelance và những điều mình
            học được trên hành trình code mỗi ngày.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:items-start">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/blog" className="flex items-center gap-2">
                Xem bài viết mới <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <Button
              variant="secondary"
              asChild
              size="lg"
              className="w-full sm:w-auto"
            >
              <Link href="/lien-he" className="flex items-center gap-2">
                Liên hệ mình <Mail className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Illustration */}
        <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg">
          <Image
            src={Avatar}
            alt="Coding on laptop illustration"
            width={600}
            height={450}
            priority
            className="h-[600px] w-[450px] rounded-3xl select-none transition-transform duration-300 hover:scale-105 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
