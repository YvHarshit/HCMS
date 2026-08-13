import { createDoctor, findDoctorByEmail, getAllDoctors, getDoctorByIdRepository, updateDoctorStatusRepository } from "../repositories/doctor.repository";
import bcrypt from "bcryptjs";
import {CreateDoctorData} from "../types/doctor.types";


export async function getDoctors() {
  return getAllDoctors();
}




export async function registerDoctor(data: CreateDoctorData) {
 
  const existingDoctor = await findDoctorByEmail(data.email);

  if (existingDoctor) {
    throw new Error("Doctor with this email already exists");
  }
  const hashedPassword = await bcrypt.hash(data.password, 10);

  // if (role === D)

  const doctor = await createDoctor({
    ...data,
    email: data.email.toLowerCase(),
    password: hashedPassword,   
  });


  const doctorObject = doctor.toObject();

  const { password, ...doctorWithoutPassword } = doctorObject;

  return doctorWithoutPassword;
}


// if (role === p)





export async function getDoctorById(id: string) {
  const doctor = await getDoctorByIdRepository(id);

  return doctor;
}




export async function updateDoctorStatus(id: string, status: "approved" | "rejected") {
  return updateDoctorStatusRepository(id, status);
}