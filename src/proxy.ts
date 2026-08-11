import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  // console.log(`[Test_Proxy]`);
  // console.log(`Method: ${req.method}`);
  // console.log(`URL: ${req.url}`);
  console.log("Middleware Running.........")

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};