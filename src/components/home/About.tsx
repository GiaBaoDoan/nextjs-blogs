"use client";

import { Facebook, Github, Linkedin, Mail } from "lucide-react";

import Avatar from "@/public/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.webp";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Intro Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <Image
            src={Avatar}
            alt="Gia Bảo"
            width={120}
            height={120}
            className="rounded-full border-4 border-indigo-500 shadow-lg"
            priority
          />
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Mình là{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Gia Bảo
            </span>
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Đây là blog cá nhân nơi mình ghi lại kiến thức lập trình, tổng hợp
            từ nhiều nguồn và trải nghiệm thực tế trong quá trình học và làm.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-10 text-left">
          {/* Kỹ năng */}
          <div className="bg-white/90 dark:bg-gray-800/70 rounded-xl p-6 shadow-md backdrop-blur-sm">
            <h3 className="text-lg font-semibold mb-2 text-indigo-600">
              💻 Tech Stack
            </h3>
            <ul className="list-disc list-inside  space-y-1">
              <li>React / Next.js / TypeScript / Tailwind CSS</li>
              <li>Node.js / Express / MongoDB / Prisma</li>
              <li>Redux Toolkit, Zustand, React Hook Form, Zod</li>
              <li>NextAuth, JWT, OAuth2, Cloudinary, Vercel, Render</li>
            </ul>
          </div>

          {/* Mục tiêu */}
          <div className="bg-white/90 dark:bg-gray-800/70 rounded-xl p-6 shadow-md backdrop-blur-sm">
            <h3 className="text-lg mb-2 text-indigo-600">🎯 Mục Tiêu</h3>
            <p className="">
              Trở thành một Fullstack Developer có tư duy sản phẩm – vừa giỏi kỹ
              thuật, vừa hiểu người dùng. Mình đang hướng tới freelance và các
              dự án cá nhân thực tế, phục vụ cộng đồng.
            </p>
          </div>

          {/* Dự án cá nhân */}
          <div className="bg-white/90 dark:bg-gray-800/70 rounded-xl p-6 shadow-md backdrop-blur-sm">
            <h3 className="text-lg mb-2 text-indigo-600">🚀 Dự án</h3>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>Blog cá nhân:</strong> Next.js, Markdown, tối ưu SEO,
                theme indigo
              </li>
              <li>
                <strong>Web bán hàng:</strong> Dashboard quản trị, upload ảnh,
                lọc đơn hàng
              </li>
              <li>
                <strong>Admin quản lý vé số:</strong> CRUD, phân quyền, thống kê
              </li>
            </ul>
          </div>

          {/* Sở thích & lối sống */}
          <div className="bg-white/90 dark:bg-gray-800/70 rounded-xl p-6 shadow-md backdrop-blur-sm">
            <h3 className="text-lg mb-2 text-indigo-600">🏃 Lối sống</h3>
            <ul className="list-disc list-inside  space-y-1">
              <li>Ưu tiên sống tối giản – học sâu – code chắc</li>
              <li>Yêu thích đọc sách, tập thể dục, sống chậm</li>
              <li>Viết blog để hệ thống lại tư duy</li>
              <li>Uống cafe</li>
            </ul>
          </div>
        </div>

        {/* Quote cá nhân */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <blockquote className="italic text-muted-foreground">
            “Code không chỉ là giải pháp kỹ thuật, mà là cách mình thể hiện sự
            ngăn nắp trong tư duy.”
          </blockquote>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <div className="flex gap-3 justify-center mt-10">
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
      </div>
    </section>
  );
}
