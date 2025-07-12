"use client";

import Link from "next/link";
import UserAvatar from "@/components/users/UserAvatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { LogOut, Settings, User } from "lucide-react";
import { useFetchAccount } from "@/hooks/useAccount";
import { useLogout } from "@/hooks/useAuth";

const AccountTrigger = () => {
  const { data } = useFetchAccount();
  const { mutate } = useLogout();

  return data?.data ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <UserAvatar avatar={data?.data?.image as string} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="text-sm">
          {data?.data.username}
        </DropdownMenuLabel>
        <DropdownMenuItem className="text-xs text-muted-foreground">
          {data?.data.email}
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/account">
            <User className="mr-2 h-4 w-4" />
            Tài khoản
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/account/settings">
            <Settings className="mr-2 h-4 w-4" />
            Cài đặt
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => mutate()}>
          <LogOut className="mr-2 h-4 w-4" />
          Đăng xuất
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <div className="flex gap-2">
      <Button variant="outline" asChild>
        <Link href="/auth/login">Đăng nhập</Link>
      </Button>
      <Button variant="primary">
        <Link href="/auth/register">Đăng ký</Link>
      </Button>
    </div>
  );
};

export default AccountTrigger;
