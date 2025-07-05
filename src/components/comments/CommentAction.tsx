"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { SquarePen, MoreHorizontal, CircleCheck } from "lucide-react";
import { toast } from "sonner"; // dùng react-hot-toast hoặc sonner tuỳ bạn

type CommentActionProps = {
  id: string;
  onEdit: (id: string) => void; // click “Chỉnh sửa”
  onDelete: (id: string) => void; // click “Delete”
};

export const CommentAction = ({ id, onEdit, onDelete }: CommentActionProps) => {
  return (
    <div className="flex items-center gap-1">
      {/* Nút chỉnh sửa */}
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8"
        onClick={() => onEdit(id)}
      >
        <SquarePen className="h-4 w-4" />
        <span className="sr-only">Chỉnh sửa bình luận</span>
      </Button>

      {/* Menu “...” */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">Mở menu</span>
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>

          {/* Copy ID */}
          <DropdownMenuItem
            onClick={() => {
              navigator.clipboard.writeText(id);
              toast.success("Đã copy ID bình luận!", {
                description: id,
                icon: <CircleCheck className="h-4 w-4" />,
              });
            }}
          >
            Copy ID
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          {/* Delete */}
          <DropdownMenuItem
            className="text-destructive"
            onClick={() => onDelete(id)}
          >
            Delete
            <span className="ml-auto text-xs opacity-60">⌘⌫</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
