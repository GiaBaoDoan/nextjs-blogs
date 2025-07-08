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
export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-gray-950 py-24 sm:py-32 text-white">
      {/* Vùng glow nền */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 flex justify-center opacity-30"
      >
        <div className="aspect-square w-[50rem] bg-gradient-to-tr from-indigo-500 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        {/* Text content */}
        <div className="max-w-xl text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Biến <span className="text-indigo-400">ý tưởng</span> thành sản phẩm
            thực tế
          </h1>
          <p className="text-gray-300 text-lg">
            Mình là <span className="text-white font-medium">Bảo</span>, lập
            trình viên web & chia sẻ kinh nghiệm học tập, freelance, và xây dựng
            sản phẩm.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/blog"
              className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-sm font-medium hover:bg-indigo-700 transition"
            >
              Xem bài viết
            </a>
            <a
              href="/lien-he"
              className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 text-sm font-medium hover:bg-white/10 transition"
            >
              Liên hệ mình
            </a>
          </div>
        </div>

        {/* Visual cards */}
        <div className="grid grid-cols-2 gap-4 max-w-md w-full">
          {[
            "Tôi cần làm Website cá nhân",
            "Tôi muốn phát triển MVP",
            "Tôi cần người hướng dẫn",
            "Tôi đang học lập trình",
          ].map((text, i) => (
            <div
              key={i}
              className="bg-white/5 rounded-xl p-6 text-sm font-semibold text-center backdrop-blur-md border border-white/10 hover:scale-105 transition-transform"
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
