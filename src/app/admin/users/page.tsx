import { UserListTable } from "@/components/users/UserListTable";

const UserTablePage = () => {
  return (
    <div className="container py-7">
      <h2 className="text-2xl font-medium mb-5">Người Dùng</h2>
      <UserListTable />
    </div>
  );
};

export default UserTablePage;
