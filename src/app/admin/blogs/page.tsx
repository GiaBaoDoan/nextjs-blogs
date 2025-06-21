import BlogListTable from "@/components/blogs/BlogListTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const BlogTablePage = () => {
  return (
    <div className="container py-7 space-y-5">
      <div className="flex justify-between items-center">
        <h3>Bài viết</h3>
        <Link href={"/admin/blogs/add"}>
          <Button>Thêm bài viết +</Button>
        </Link>
      </div>
      <BlogListTable />
    </div>
  );
};

export default BlogTablePage;
