"use client";

import Back from "@/components/ui/back";
import { UserForm } from "@/components/users/UserForm";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getUserById } from "@/store/thunk/get-detail-user";

import { User } from "@/types/user.type";
import { useParams } from "next/navigation";
import { useEffect } from "react";

const UserEditPage = () => {
  const { id } = useParams();

  const { user } = useAppSelector((state) => state.UserReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserById(id as string));
  }, [dispatch, id]);

  return (
    <main className="container">
      <Back text="Edit người dùng" />
      <UserForm user={user as User} />
    </main>
  );
};

export default UserEditPage;
