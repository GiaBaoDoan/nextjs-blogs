import CategoriesList from "@/components/categories/CategoriesList";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CategoryTablePage = () => {
  return (
    <div className="container py-7 space-y-5">
      <div className="flex justify-between items-center">
        <h3>Danh mục bài viết</h3>
        <Link href={"/admin/categories/add"}>
          <Button>Thêm danh mục +</Button>
        </Link>
      </div>
      <CategoriesList />
    </div>
  );
};

export default CategoryTablePage;
