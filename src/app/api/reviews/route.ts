import { createReviewController, getReviewsController } from "@/app/controllers/review.controller";
import { NextRequest } from "next/server";


export async function POST(req: NextRequest) {
  return createReviewController(req);
}



export async function GET(req: NextRequest) {
  return getReviewsController(req);
}