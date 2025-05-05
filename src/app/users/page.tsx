import { UserList } from "@/components/users/UserList";

const UserListPage = () => {
  return (
    <div className="w-[90%] mx-auto my-10">
      <h2 className="text-2xl mb-5">Người dùng</h2>
      <UserList />
    </div>
  );
};

export default UserListPage;
