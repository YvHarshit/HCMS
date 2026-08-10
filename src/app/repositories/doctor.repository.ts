import connectDB from "@/lib/db";
import Doctor from "@/models/Doctor";
import { CreateDoctorData} from "../types/doctor.types";

export async function getAllDoctors() {
  await connectDB();
  return Doctor.find();
}

export async function findDoctorByEmail(email: string) {
  await connectDB();
  return Doctor.findOne({ email });
}

export async function createDoctor(doctorData: CreateDoctorData) {
  await connectDB();
  return Doctor.create(doctorData);
}




export async function getDoctorByIdRepository(id: string) {
  await connectDB();

  return Doctor.findById(id).select("-password");
}