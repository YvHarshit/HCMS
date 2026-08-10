import bcrypt from "bcryptjs";
import { createPatient, findPatientByEmail, getAllPatients, getPatientByIdRepository } from "../repositories/patient.repository";
import { CreatePatientData } from "../types/patient.types";



export async function getPatients() {
  return getAllPatients();
}



export async function registerPatient(data: CreatePatientData) {
  
  const existingPatient = await findPatientByEmail(data.email);

  if (existingPatient) {
    throw new Error("Patient with this email already exists");
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  
  const patient = await createPatient({
    ...data,
    email: data.email.toLowerCase(),
    password: hashedPassword,
  });

  // Don't return password
  const patientObject = patient.toObject();

  const { password, ...patientWithoutPassword } = patientObject;

  return patientWithoutPassword;
}



export async function getPatientById(id: string) {
  const patient = await getPatientByIdRepository(id);

  return patient;
}