"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const ProfilePage = () => {
  const { data } = useSession();

  return (
    <div className="flex min-h-screen w-full justify-center items-center">
      <div className="space-y-2">
        <Image
          src={(data?.user?.image as string) || "/fallback"}
          alt="ảnh"
          className="w-10 h-10 rounded-full"
          width={300}
          height={400}
        />
        <p>{data?.user?.email}</p>
        <Button onClick={() => signOut()}>Đăng xuất</Button>
      </div>
    </div>
  );
};

export default ProfilePage;
