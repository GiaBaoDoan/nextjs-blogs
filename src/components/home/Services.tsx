import {
  Laptop,
  BookOpenCheck,
  PenLine,
  MessageCircleCode,
  Paintbrush2,
  Settings2,
  Rocket,
} from "lucide-react";

const services = [
  {
    title: "Thiết kế & phát triển web",
    desc: "Website cá nhân, giới thiệu, hoặc landing page với UX/UI hiện đại.",
    icon: <Laptop className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: "Tư vấn học lập trình",
    desc: "Hỗ trợ lộ trình học phù hợp, định hướng nghề nghiệp.",
    icon: <BookOpenCheck className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: "Viết blog & chia sẻ kiến thức",
    desc: "Đóng góp nội dung hữu ích cho cộng đồng lập trình.",
    icon: <PenLine className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: "Mentor & hỗ trợ dự án",
    desc: "Debug, cải tiến code, chia sẻ kinh nghiệm thực chiến.",
    icon: <MessageCircleCode className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: "Thiết kế UI/UX",
    desc: "Tư duy giao diện đẹp, dễ dùng, thân thiện người dùng.",
    icon: <Paintbrush2 className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: "Tối ưu hiệu suất & SEO",
    desc: "Tăng tốc độ tải trang, cải thiện SEO và trải nghiệm.",
    icon: <Settings2 className="w-6 h-6 text-indigo-600" />,
  },
  {
    title: "Tư vấn freelance",
    desc: "Chia sẻ kinh nghiệm làm freelancer và tìm job.",
    icon: <Rocket className="w-6 h-6 text-indigo-600" />,
  },
];

export function ServiceSection() {
  return (
    <section className="container py-20">
      <article className="text-center mx-auto max-w-xl mb-12">
        <h2 className="text-3xl font-bold mb-5">Dịch vụ mình cung cấp</h2>
        <p className="text-muted-foreground text-sm">
          Khám phá các bài viết chuyên sâu về thiết kế web, lập trình, công nghệ
          và những chia sẻ thực tế từ hành trình phát triển phần mềm.
        </p>
      </article>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((item, i) => (
          <div
            key={i}
            className="group rounded-2xl border bg-white p-6 shadow-sm hover:shadow-xl transition hover:-translate-y-1"
          >
            <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-600 transition">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
