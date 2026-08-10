import mongoose from "mongoose";

export interface CreateReviewData {
  doctorId: mongoose.Types.ObjectId | string;
  patientId: mongoose.Types.ObjectId | string;
  appointmentId: mongoose.Types.ObjectId | string;
  rating: number;
  comment?: string;
}