// components/post/PostActionBar.tsx
import { cn } from "@/lib/utils"; // helper gộp className
import { Button } from "@/components/ui/button";
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  AlertTriangle,
  Copy as CopyLink,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// LikeButton của bạn (giữ nguyên)
import LikeButton from "./LikeButton";
import { useFetchCommentList } from "@/hooks/useComments";

type Props = {
  postId: string;
  className?: string;
};

export default function PostActionBar({ postId, className }: Props) {
  const { data: comments } = useFetchCommentList(postId);

  return (
    <div>
      <aside
        className={cn("hidden lg:block w-40 shrink-0 sticky top-28", className)}
      >
        <div className="flex flex-col items-center gap-4">
          <LikeButton postId={postId} />

          <ActionTooltip label="Bình luận">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary flex gap-1 items-center"
              onClick={() => {
                document.getElementById("comments")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <MessageCircle className="h-5 w-5" />
              <span className="text-xs">{comments?.data?.length}</span>
            </Button>
          </ActionTooltip>

          {/* 3. Chia sẻ */}
          <ActionTooltip label="Chia sẻ">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-primary"
              onClick={async () => {
                await navigator.share?.({
                  title: document.title,
                  text: "Xem bài viết này!",
                  url: window.location.href,
                });
              }}
            >
              <Share2 className="h-5 w-5" />
            </Button>
          </ActionTooltip>

          {/* 4. Lưu bài viết */}
          <ActionTooltip label="Lưu bài viết">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-primary"
              onClick={() => /* handleBookmark */ null}
            >
              <Bookmark className="h-5 w-5" />
            </Button>
          </ActionTooltip>

          {/* 5. Sao chép link */}
          <ActionTooltip label="Sao chép link">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-primary"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
              }}
            >
              <CopyLink className="h-5 w-5" />
            </Button>
          </ActionTooltip>

          {/* 6. Báo cáo */}
          <ActionTooltip label="Báo cáo">
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-primary"
              onClick={() => /* openReportModal */ null}
            >
              <AlertTriangle className="h-5 w-5" />
            </Button>
          </ActionTooltip>
        </div>
      </aside>
    </div>
  );
}

/* ---------- Component nhỏ dùng lại ---------- */
function ActionTooltip({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side="right" className="text-sm">
          {label}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
