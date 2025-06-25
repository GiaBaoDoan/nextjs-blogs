"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo.png";
import facebook from "@/public/facebook.png";
import zalo from "@/public/zalo.svg";
import gmail from "@/public/gmail.png";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t mt-10">
      <div className="container py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Giới thiệu nhanh */}
        <div>
          <Link href="/" className="flex items-center space-x-2 mb-2">
            <Image
              src={logo}
              alt="logo"
              width={40}
              height={40}
              className="rounded-md"
            />
          </Link>
          <p className="text-sm">
            <span className="font-bold underline">© 2025 Blog Dev.</span> Chia
            sẻ kiến thức lập trình & dự án thực tế mỗi tuần. Viết bằng ❤️ và
            caffeine. Cảm ơn bạn đã ghé thăm!
          </p>
        </div>

        {/* Điều hướng */}
        <div>
          <h3 className="font-bold text-lg mb-2">Liên kết</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link className="hover:underline" href="/">
                Trang chủ
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/blogs">
                Bài viết
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/about">
                Giới thiệu
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/contact">
                Liên hệ
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Liên hệ</h3>
          <ul className="space-y-1 text-sm flex gap-3">
            <li>
              <a
                href="https://github.com/yourname"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={facebook}
                  alt="logo"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/yourname"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={zalo}
                  alt="logo"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/yourname"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={gmail}
                  alt="logo"
                  width={40}
                  height={40}
                  className="rounded-md"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t text-center text-sm py-4">
        © {new Date().getFullYear()} Đoàn Gia Bảo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
