"use client";

import Link from "next/link";
import Image from "next/image";
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

const UserAuth = () => {
  const { data } = useFetchAccount();
  const { mutate } = useLogout();

  return data?.data ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          {data?.data.image ? (
            <Image
              src={data?.data.image}
              alt="avatar"
              width={100}
              height={100}
              className="rounded-full w-10 h-10 object-cover"
            />
          ) : (
            <UserAvatar />
          )}
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
      <Button variant="ghost" asChild>
        <Link href="/auth/login">Đăng nhập</Link>
      </Button>
      <Button asChild>
        <Link href="/auth/register">Đăng ký</Link>
      </Button>
    </div>
  );
};

export default UserAuth;
