import { Skeleton } from "@/components/ui/skeleton";

export function BlogDetailSkeleton() {
  return (
    <div>
      <div className="space-y-4 max-w-3xl py-10 mx-auto">
        <Skeleton className="h-10 w-3/4" /> {/* Tiêu đề */}
        <Skeleton className="h-4 w-1/2" /> {/* Ngày / tác giả */}
        <Skeleton className="h-[300px] w-full rounded-xl" />{" "}
        {/* Ảnh đại diện */}
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[90%]" />
        <Skeleton className="h-4 w-[80%]" />
        <Skeleton className="h-4 w-[95%]" />
      </div>
    </div>
  );
}
