import ContactForm from "@/components/home/ContactForm";
import { Facebook, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

// Bạn đã có ContactForm riêng; giữ Abnguyên

export function ContactSection() {
  return (
    /* 1) NỀN TÍM NHẸ (bg-indigo-50)  – tự chuyển tím đậm khi Dark Mode */
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container max-w-4xl mx-auto px-4">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          {/* LEFT – THÔNG TIN LIÊN HỆ */}
          <div
            className="
          rounded-3xl
          bg-white/80 dark:bg-gray-800/80
          backdrop-blur-md
          p-8 md:p-10
          shadow
          space-y-10
        "
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Yêu cầu bài viết</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Nếu bạn có một chủ đề muốn mình chia sẻ trong quá trình học lập
                trình, mình rất vui khi có thể viết những bài viết hữu ích cho
                bạn!
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-medium">Thông tin liên hệ</h4>
              <ul className="space-y-4 text-sm">
                <ContactItem
                  icon="📧"
                  label="Email"
                  href="mailto:giabao@example.com"
                  text="giabao@example.com"
                />
                <ContactItem
                  icon="📱"
                  label="Zalo"
                  href="https://zalo.me"
                  text="zalo.me"
                />
                <ContactItem
                  icon="🔗"
                  label="Facebook"
                  href="https://facebook.com"
                  text="facebook.com"
                />
                <ContactItem
                  icon="💻"
                  label="GitHub"
                  href="https://github.com/yourusername"
                  text="github.com/yourusername"
                />
              </ul>
            </div>
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
          </div>

          {/* RIGHT – FORM LIÊN HỆ */}
          <div
            className="
          rounded-3xl
          bg-white dark:bg-gray-900
          shadow
          p-8 md:p-10
        "
          >
            <h3 className="text-2xl font-semibold mb-6">Gửi yêu cầu của bạn</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========== COMPONENT HIỂN THỊ 1 DÒNG CONTACT ========== */
function ContactItem({
  icon,
  label,
  href,
  text,
}: {
  icon: string;
  label: string;
  href: string;
  text: string;
}) {
  return (
    <li className="flex items-center gap-3">
      <span className="text-lg">{icon}</span>
      <span className="text-gray-700 dark:text-indigo-100">
        {label}:{" "}
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 dark:text-indigo-300 hover:underline"
        >
          {text}
        </Link>
      </span>
    </li>
  );
}
