import TagsList from "@/components/tags/TagsList";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const TagListPage = () => {
  return (
    <div className="container py-7 space-y-5">
      <div className="flex justify-between items-center">
        <h3>Tags</h3>
        <Link href={"/admin/tags/add"}>
          <Button>Thêm tags +</Button>
        </Link>
      </div>
      <TagsList />
    </div>
  );
};

export default TagListPage;
