import { Button } from "@/components/ui/button";
import { Ellipsis, SquarePen, Trash } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Action = ({ id }: { id: string }) => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <div>
      <Button
        onClick={() => router.push(`${pathName}/${id}`)}
        variant={"ghost"}
      >
        <SquarePen />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button className="cursor-pointer" variant="ghost">
            <Ellipsis />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => navigator.clipboard.writeText(id)}>
            Copy ID
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <Button className="bg-red-500 text-white w-full justify-start">
            <Trash />
            <span>Xóa</span>
          </Button>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Action;
