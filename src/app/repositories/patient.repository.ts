import connectDB from "@/lib/db";
import Patient from "@/models/Patient";
import { CreatePatientData } from "../types/patient.types";


export async function getAllPatients() {
    await connectDB()
    return Patient.find()

}

export async function createPatient(patientData: CreatePatientData) {
  await connectDB();
  return Patient.create(patientData);
}

export async function findPatientByEmail(email: string) {
  return Patient.findOne({email: email.toLowerCase()});
}


export async function getPatientByIdRepository(id: string) {
  await connectDB();

  return Patient.findById(id).select("-password");
}