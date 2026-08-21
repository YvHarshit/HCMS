import { createDoctor, findDoctorByEmail, getAllDoctors, getDoctorByIdRepository, updateDoctorStatusRepository } from "../repositories/doctor.repository";
import bcrypt from "bcryptjs";
import {CreateDoctorData} from "../types/doctor.types";


export async function getDoctors() {
  return getAllDoctors();
}


export async function registerDoctor(data: CreateDoctorData) {
 
  const existingDoctor = await findDoctorByEmail(data.email);

   if (existingDoctor) {
    return Response.json(
      { message: 'Email is already taken' },
      { status: 400 }
    );
  }
  const hashedPassword = await bcrypt.hash(data.password, 10);

  const doctor = await createDoctor({
    ...data,
    email: data.email.toLowerCase(),
    password: hashedPassword,   
  });


  const doctorObject = doctor.toObject();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password, ...doctorWithoutPassword } = doctorObject;

  return doctorWithoutPassword;
}




export async function getDoctorById(id: string) {
  const doctor = await getDoctorByIdRepository(id);
  return doctor;
}




export async function updateDoctorStatus(id: string, status: "approved" | "rejected") {
  return updateDoctorStatusRepository(id, status);
}


export async function loginDoctor(email: string, password: string) {
  try {
    const doctor = await findDoctorByEmail(email.toLowerCase());

  if (!doctor) {
    throw new Error("Invalid email or password");
  }

  const isPasswordValid = await bcrypt.compare(password, doctor.password);

  if (!isPasswordValid) {
    throw new Error("Invalid password");
  }

  return doctor;
} catch (error) {
    console.error("Error logging in hospital admin:", error);
    throw error;
  }
}