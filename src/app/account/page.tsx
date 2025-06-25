"use client";

import Avatar from "@/components/account/AvatarForm";
import Profile from "@/components/account/ProfileForm";
import Security from "@/components/account/SecurityForm";
import { useFetchAccount } from "@/hooks/useAccount";
import { User } from "@/types/user.type";

const Account = () => {
  const { data } = useFetchAccount();

  return (
    <div className="container py-10">
      <h3 className="mb-10">Cài đặt tài khoản</h3>

      <div className=" flex gap-10">
        <div className="w-[150px] py-5">
          <ul className="space-y-5">
            <li className="text-sm">Ảnh đại diện</li>
            <li className="text-sm">Hồ Sơ</li>
            <li className="text-sm">Bảo mật</li>
          </ul>
        </div>
        <div className="flex flex-col flex-1">
          <Avatar account={data?.data as User} />
          <Profile account={data?.data as User} />
          <Security />
        </div>
      </div>
    </div>
  );
};

export default Account;
