import Link from "next/link";

type Project = {
  title: string;
  description: string;
  link?: string;
};

const dummyProjects: Project[] = [
  {
    title: "🍕 Pizza Order App",
    description:
      "Ứng dụng đặt pizza đơn giản dùng React và Firebase. Có đăng nhập, thêm món, thanh toán.",
    link: "https://github.com/yourusername/pizza-app",
  },
  {
    title: "📖 Blog cá nhân",
    description:
      "Blog Next.js viết bằng Markdown, có dark mode và phân loại bài viết theo tag.",
    link: "https://yourblog.com",
  },
  {
    title: "🛒 Web bán hàng mini",
    description:
      "Trang thương mại điện tử nhỏ với Next.js + MongoDB + Cloudinary. Có dashboard admin.",
  },
];

export function ProjectSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-4">
          🧰 Dự án cá nhân
        </h2>
        <p className="text-center text-muted-foreground text-sm max-w-xl mx-auto mb-10">
          Một vài project mình đã tự làm để luyện tập và học hỏi. Sẽ cập nhật
          thêm sau!
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dummyProjects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl border bg-white dark:bg-gray-900 p-5 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {project.description}
              </p>
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  className="inline-block text-indigo-500 hover:underline text-sm mt-3"
                >
                  Xem chi tiết →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
