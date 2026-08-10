import connectDB from "@/lib/db";
import { CreateReviewData } from "../types/review.types";
import FeedbackReview from "@/models/FeedbackReview";


export async function createReview(reviewData: CreateReviewData) {
  await connectDB();

  return FeedbackReview.create(reviewData);
}

export async function findReviewByAppointment(appointmentId: string) {
  await connectDB();

  return FeedbackReview.findOne({appointmentId});
}