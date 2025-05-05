"use client";

import { Button } from "@/components/ui/button";
import { UserForm } from "@/components/users/UserForm";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getUserById } from "@/store/thunk/getDetailUser";
import { User } from "@/types/user.type";
import { ChevronLeft } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

const UserDetailPage = () => {
  const dispatch = useAppDispatch();

  const router = useRouter();
  const { id } = useParams();

  const { user } = useAppSelector((state) => state.UserReducer);

  useEffect(() => {
    dispatch(getUserById(id as string));
  }, [dispatch]);

  return (
    <div className="w-[90%] mx-auto my-10">
      <article>
        <Button onClick={() => router.back()} variant="ghost">
          <ChevronLeft />
          <span>Quay lại</span>
        </Button>
        <h1 className="text-2xl font-medium">Edit Người Dùng</h1>
      </article>
      <UserForm user={user as User} />
    </div>
  );
};

export default UserDetailPage;
