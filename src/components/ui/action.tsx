import { Button } from "@/components/ui/button";
import {
  Delete,
  Ellipsis,
  Eye,
  MoreHorizontal,
  ScanEye,
  SquarePen,
  Trash,
} from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useAsyncAction from "@/hooks/useAction";

const Action = ({
  id,
  onDelete,
}: {
  id: string;
  onDelete: (id: string) => void;
}) => {
  const router = useRouter();
  const pathName = usePathname();

  const { execute, isLoading } = useAsyncAction();

  const handleDelete = (id: string) => {
    execute({
      actionCreator: () => onDelete(id),
    });
  };

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
          <DropdownMenuItem onClick={() => navigator.clipboard.writeText(id)}>
            Copy ID
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => router.push(`${pathName}/edit/${id}`)}
          >
            <Eye color="black" size={15} />
            <span>View</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleDelete(id)}
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
