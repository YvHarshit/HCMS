import mongoose from "mongoose";

export interface CreateDoctorData {
  name: string;
  email: string;
  password: string;
  phone: string;
  hospitalId: string;
  specialization: string;
  qualification: string;
  experience: number;
  consultationFee: number;
}

export interface CreateDoctorDocumentData extends CreateDoctorData {
  rating: number;
  totalReviews: number;
  status: string;
}