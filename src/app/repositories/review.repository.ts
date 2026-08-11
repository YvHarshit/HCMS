import connectDB from "@/lib/db";
import { CreateReviewData } from "../types/review.types";
import FeedbackReview from "@/models/FeedbackReview";
import "@/models/Doctor";
import "@/models/Patient";
import "@/models/Appointment";

export async function createReview(reviewData: CreateReviewData) {
  await connectDB();

  return FeedbackReview.create(reviewData);
}

export async function findReviewByAppointment(appointmentId: string) {
  await connectDB();

  return FeedbackReview.findOne({appointmentId});
}

export async function getAllReviewsRepository() {
  await connectDB();

  return FeedbackReview.find()
    .populate("doctorId", "name specialization")
    .populate("patientId", "name")
    .populate("appointmentId")
    .sort({ createdAt: -1 }); 
  }
