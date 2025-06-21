"use client";

import { useAppDispatch } from "@/store/store";
import { Response, HttpError } from "@/types/index";
import { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "sonner";

export default function useAsyncAction<T>() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const execute = async ({
    actionCreator,
    callBack,
  }: {
    actionCreator: () => any;
    callBack?: (res?: Response<T>) => void;
  }) => {
    setIsLoading(true);
    try {
      const res = (await dispatch(actionCreator()).unwrap()) as Response<T>;
      toast("👍 Thành công", {
        description: (
          <p className="mt-2 w-[320px] rounded-md bg-slate-950 p-4">
            <code className="text-white">
              {JSON.stringify({ message: res.message })}
            </code>
          </p>
        ),
      });

      if (callBack) callBack(res);
    } catch (err) {
      const errorMessage = err as AxiosError<HttpError>;
      toast(`${errorMessage.response?.statusText} ${errorMessage.status}`, {
        description: (
          <p className="mt-2 w-[320px] rounded-md bg-slate-950 p-4">
            <code className="text-white">
              {JSON.stringify({
                message:
                  errorMessage.response?.data.message ||
                  "Lỗi không xác định !!",
              })}
            </code>
          </p>
        ),
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { execute, isLoading };
}
