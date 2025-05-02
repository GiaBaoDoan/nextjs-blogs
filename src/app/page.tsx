import { TableDemo } from "@/components/users/UserList";

export default async function Home() {
  return (
    <main className="w-[90%] mx-auto my-10">
      <h2 className="text-2xl mb-5">Table users</h2>
      <TableDemo />
      {/* <UserAdd /> */}
    </main>
  );
}
