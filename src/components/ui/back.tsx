"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const Back = ({ text }: { text: string }) => {
  const router = useRouter();
  return (
    <div className="mb-5 flex flex-col items-start">
      <Button onClick={() => router.back()} variant="ghost">
        <ChevronLeft />
        <span>Quay lại</span>
      </Button>
      <h3>{text}</h3>
    </div>
  );
};

export default Back;
