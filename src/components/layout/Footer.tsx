"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Facebook, Github, Linkedin } from "lucide-react";
import Logo from "@/components/ui/logo";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-slate-100 text-gray-800 mt-20 border-t">
      <div className="container mx-auto grid gap-5 py-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* brand */}
        <div className="space-y-4">
          <Logo />
          <p className="text-sm leading-relaxed text-gray-600">
            Blog cá nhân chia sẻ kiến thức lập trình Web, Next.js & hành trình
            freelance. Viết bằng ❤️ & caffeine.
          </p>
        </div>

        {/* nav */}
        <div className="space-y-4">
          <h3 className="text-base font-semibold uppercase tracking-wide text-gray-700">
            Liên kết nhanh
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="transition hover:text-indigo-600">
                Trang chủ
              </Link>
            </li>
            <li>
              <Link href="/blog" className="transition hover:text-indigo-600">
                Bài viết
              </Link>
            </li>
            <li>
              <Link href="/#about" className="transition hover:text-indigo-600">
                Giới thiệu
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="transition hover:text-indigo-600"
              >
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>

        {/* contact */}
        <div className="space-y-4">
          <h3 className="text-base font-semibold uppercase tracking-wide text-gray-700">
            Kết nối
          </h3>
          <div className="flex gap-3">
            <Link
              href="mailto:giabao@example.com"
              aria-label="Email"
              className="rounded-full bg-gray-200 p-2 hover:bg-gray-300 transition"
            >
              <Mail className="h-5 w-5 text-gray-700" />
            </Link>
            <Link
              href="https://linkedin.com/in/yourusername"
              aria-label="LinkedIn"
              target="_blank"
              className="rounded-full bg-gray-200 p-2 hover:bg-gray-300 transition"
            >
              <Linkedin className="h-5 w-5 text-gray-700" />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
              className="rounded-full bg-gray-200 p-2 hover:bg-gray-300 transition"
            >
              <Facebook className="h-5 w-5 text-gray-700" />
            </Link>
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              aria-label="Github"
              className="rounded-full bg-gray-200 p-2 hover:bg-gray-300 transition"
            >
              <Github className="h-5 w-5 text-gray-700" />
            </Link>
          </div>
        </div>

        {/* newsletter */}
        <div className="lg:col-span-1 sm:col-span-2 space-y-4">
          <h3 className="text-base font-semibold uppercase tracking-wide text-gray-700">
            Theo dõi bài viết mới
          </h3>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row items-center gap-3 max-w-xl"
          >
            <input
              type="email"
              placeholder="Email"
              required
              className="bg-white w-full flex-1 rounded-md border border-gray-300 px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Button size="lg" variant="primary">
              Đăng ký
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-300 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Gia Bảo. All rights reserved.
      </div>
    </footer>
  );
}
