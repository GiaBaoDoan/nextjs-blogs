"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useVerify } from "@/hooks/useAuth";
import Link from "next/link";
import Loading from "@/components/ui/loading";
import AlertBox from "@/components/ui/alert-box";

const Page = () => {
  const { id, token } = useParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const [message, setMessage] = useState("");

  const { data, isError, isSuccess, error, isFetching } = useVerify(
    id as string,
    token as string
  );

  useEffect(() => {
    if (isFetching) {
      setStatus("loading");
      setMessage("Đang xác thực...");
    }

    if (isSuccess && data) {
      setStatus("success");
      setMessage(`${data.message} 🎉`);
    }

    if (isError && error) {
      const errMessage =
        (error as any)?.response?.data?.message ||
        "Xác thực thất bại. Vui lòng thử lại.";
      setStatus("error");
      setMessage(errMessage);
    }
  }, [isFetching, isSuccess, isError, data, error]);
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md text-center space-y-3">
        <h3>Xác thực email</h3>
        {status === "loading" && (
          <div className="flex flex-col items-center gap-4">
            <Loading />
            <p className="text-gray-600">Đang xác thực email...</p>
          </div>
        )}

        <AlertBox message={message} type={status as "error" | "success"} />

        <Link
          href={"/auth/login"}
          className="text-red-500 hover:underline text-sm"
        >
          Về trang đăng nhập
        </Link>
      </div>
    </div>
  );
};

export default Page;
