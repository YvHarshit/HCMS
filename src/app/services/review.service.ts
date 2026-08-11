import Doctor from "@/models/Doctor";
import { createReview, findReviewByAppointment, getAllReviewsRepository } from "../repositories/review.repository";


export async function registerReview(data: {doctorId: string; patientId: string; appointmentId: string; rating: number; comment?: string;}) {
  
  const review = await createReview(data);

  // Find doctor
  const doctor = await Doctor.findById(data.doctorId);

  if (!doctor) throw new Error("Doctor not found") 
  // Calculate new average rating
  const newTotalReviews = doctor.totalReviews + 1;

  const newRating = (doctor.rating * doctor.totalReviews + data.rating) / newTotalReviews;

  // Update doctor
  doctor.rating = Number(newRating.toFixed(2));
  doctor.totalReviews = newTotalReviews;
  await doctor.save();
  return review;
}

export async function getReviews() {
  return getAllReviewsRepository();
}