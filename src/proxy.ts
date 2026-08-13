import { NextRequest, NextResponse } from "next/server";
import connectDB from "./lib/db";

export function proxy(req: NextRequest) {
  console.log("Middleware Running.........")
  connectDB()

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};