"use client";

import Back from "@/components/ui/back";
import { UserForm } from "@/components/users/UserForm";
import { useUser } from "@/hooks/useUsers";

import { User } from "@/types/user.type";
import { useParams } from "next/navigation";

const UserEditPage = () => {
  const { id } = useParams();

  const { data } = useUser(`${id}`);

  return (
    <main className="container">
      <Back text="Edit người dùng" />
      <UserForm user={data?.data as User} />
    </main>
  );
};

export default UserEditPage;
