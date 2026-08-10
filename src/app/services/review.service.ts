import { createReview, findReviewByAppointment } from "../repositories/review.repository";
import { CreateReviewData } from "../types/review.types";

export async function registerReview(data: CreateReviewData) {
  // Check if review already exists
  const existingReview = await findReviewByAppointment(
    data.appointmentId.toString()
  );

  if (existingReview) {
    throw new Error(
      "Review has already been submitted for this appointment"
    );
  }

  // Validate rating
  if (data.rating < 1 || data.rating > 5) {
    throw new Error("Rating must be between 1 and 5");
  }

  const review = await createReview(data);

  return review;
}