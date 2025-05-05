import CustomError from "@/lib/cutomError";
import { tParams } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export function withErrorHandler(
  handler: (
    req: NextRequest,
    { params }: { params: tParams }
  ) => Promise<NextResponse>
) {
  return async function (req: NextRequest, { params }: { params: tParams }) {
    try {
      return await handler(req, { params });
    } catch (err: any) {
      console.log(err);
      const customError = err as CustomError;

      const status = customError?.status || 500;
      const message = customError?.message || "Internal Server Error";

      return NextResponse.json({ message }, { status });
    }
  };
}
