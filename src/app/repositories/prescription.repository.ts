import Prescription from "@/models/Prescription";
import { IPrescription } from "@/models/Prescription";
import connectDB from "@/lib/db";

export async function createPrescription(data: Partial<IPrescription>) {
  await connectDB();

  return await Prescription.create(data);
}

export async function getAllPrescriptions() {
  await connectDB();

  return await Prescription.find()
    .populate("doctorId", "name email")
    .populate("patientId", "name email")
    .populate("appointmentId");
}

export async function getPrescriptionById(id: string) {
  await connectDB();

  return await Prescription.findById(id)
    .populate("doctorId", "name email")
    .populate("patientId", "name email")
    .populate("appointmentId");
}

export async function updatePrescription(
  id: string,
  data: Partial<IPrescription>
) {
  await connectDB();

  return await Prescription.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  );
}

export async function deletePrescription(id: string) {
  await connectDB();

  return await Prescription.findByIdAndDelete(id);
}