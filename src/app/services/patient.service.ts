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

  const patientObject = patient.toObject();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password, ...patientWithoutPassword } = patientObject;

  return patientWithoutPassword;
}



export async function getPatientById(id: string) {
  const patient = await getPatientByIdRepository(id);

  return patient;
}




export async function loginPatient(email: string, password: string) {
  try {
    const patient = await findPatientByEmail(email.toLowerCase());

  if (!patient) {
    throw new Error("Invalid email or password");
  }

  const isPasswordValid = await bcrypt.compare(password, patient.password);

  if (!isPasswordValid) {
    throw new Error("Invalid password");
  }

  return patient;
} catch (error) {
    console.error("Error logging in hospital admin:", error);
    throw error;
  }
}