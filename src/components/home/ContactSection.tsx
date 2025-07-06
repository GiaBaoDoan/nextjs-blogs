import ContactForm from "@/components/home/ContactForm";
import Image from "next/image";
import Link from "next/link";

// Bạn đã có ContactForm riêng; giữ nguyên

export function ContactSection() {
  return (
    /* 1) NỀN TÍM NHẸ (bg-indigo-50)  – tự chuyển tím đậm khi Dark Mode */
    <section
      id="contact"
      className="bg-indigo-50 dark:bg-indigo-900 px-10 py-14 rounded-lg scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* 2) GRID 2 CỘT – rớt xuống 1 cột ở mobile */}
        <div className="grid gap-10 md:grid-cols-2 items-center">
          {/* ========== RIGHT: INFO CARD ========== */}
          <div className=" dark:bg-indigo-800">
            <div className="space-y-2 mb-14">
              <h3>Yêu cầu bài viết</h3>
              <p className="text-sm">
                Nếu bạn có một chủ đề muốn mình chia sẻ trong quá trình học lập
                trình, mình rất vui khi có thể viết những bài viết hữu ích cho
                bạn!
              </p>
            </div>
            <div className="space-y-6">
              <h3>Thông tin</h3>

              <ul className="space-y-4 text-sm">
                <ContactItem
                  icon="📧"
                  label="Email"
                  href="giabaod345@gmail.com"
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
                  label="Github"
                  href="https://github.com/yourusername"
                  text="github.com/yourusername"
                />
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-indigo-800 rounded-2xl shadow-lg p-8">
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
