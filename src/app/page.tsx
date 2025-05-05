import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="w-[90%] mx-auto my-10">
      <h2 className="text-2xl font-medium mb-2">Home</h2>
      <Link href={"/users"}>
        <Button>Trang người dùng</Button>
      </Link>
    </main>
  );
}
