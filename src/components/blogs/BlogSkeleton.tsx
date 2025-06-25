import { Skeleton } from "@/components/ui/skeleton";

export function BlogSkeletonCard() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {Array.from({ length: 6 }, (_, index) => (
        <div key={index} className="flex flex-col space-y-3">
          <Skeleton className="h-[200px] w-full rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-5 w-[80%]" /> {/* Tiêu đề */}
            <Skeleton className="h-4 w-[90%]" /> {/* Mô tả */}
            <Skeleton className="h-4 w-[40%]" /> {/* Thời gian đăng */}
          </div>
        </div>
      ))}
    </div>
  );
}
