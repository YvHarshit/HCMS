import { createReviewController } from "@/app/controllers/review.controller";
import { NextRequest } from "next/server";


export async function POST(req: NextRequest) {
  return createReviewController(req);
}