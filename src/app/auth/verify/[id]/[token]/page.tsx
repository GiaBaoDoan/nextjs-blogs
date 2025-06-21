"use client";

import { useAppDispatch } from "@/store/store";
import { verifyThunk } from "@/store/thunk/verify-email";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import Loading from "@/components/ui/loading";
import AlertBox from "@/components/ui/alert-box";
import Link from "next/link";

const Page = () => {
  const { id, token } = useParams();
  const dispatch = useAppDispatch();

  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (id && token) {
      dispatch(verifyThunk({ id: id as string, token: token as string }))
        .unwrap()
        .then((res) => {
          setStatus("success");
          setMessage(`${res.message} 🎉`);
        })
        .catch((err) => {
          setStatus("error");
          setMessage(
            err.response.data.message || "Xác thực thất bại. Vui lòng thử lại."
          );
        });
    }
  }, [dispatch, id, token]);

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
