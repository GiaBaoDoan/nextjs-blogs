import { Button } from "@/components/ui/button";
import { CircleCheck, MoreHorizontal, SquarePen } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

const Action = ({
  id,
  onDelete,
}: {
  id: string;
  onDelete: (id: string) => void;
}) => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <div>
      <Button
        onClick={() => router.push(`${pathName}/edit/${id}`)}
        variant={"ghost"}
      >
        <SquarePen />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => {
              navigator.clipboard.writeText(id);
              toast("Thành công", {
                icon: <CircleCheck size={20} fill="black" color="white" />,
                description: `Copied ID to clipboard`,
              });
            }}
          >
            Copy ID
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => onDelete(id)}
            className="text-destructive"
          >
            <span>Delete</span>
            ⌘⌫
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Action;
