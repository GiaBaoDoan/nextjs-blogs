import { NextRequest, NextResponse } from "next/server";

export function withErrorHandler<
  T extends (req: NextRequest, ctx: any) => Promise<NextResponse>
>(handler: T): T {
  return (async (req: NextRequest, ctx: any) => {
    try {
      return await handler(req, ctx);
    } catch (err: any) {
      console.log(err);
      const message = err.message || "Internal Server Error";
      const status = err.status || 500;

      return NextResponse.json({ message }, { status });
    }
  }) as T;
}
