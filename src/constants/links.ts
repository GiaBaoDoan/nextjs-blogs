type tLink = {
  href: string;
  link_text: string;
};

export const navLinks: tLink[] = [
  {
    href: "/",
    link_text: "Trang chủ",
  },
  {
    href: "/blogs",
    link_text: "Bài viết",
  },
  {
    href: "/about",
    link_text: "Giới thiệu",
  },
  {
    href: "/contact",
    link_text: "Liên hệ",
  },
];

export const adminLinks = [
  {
    label: "Bài viết",
    links: [
      {
        href: "/blogs/add",
        link_text: "Thêm bài viết",
      },
      {
        href: "/blogs",
        link_text: "Danh sách",
      },
    ],
  },
];
