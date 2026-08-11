import { createPrescription, deletePrescription, getAllPrescriptions, getPrescriptionById, updatePrescription } from "../repositories/prescription.repository";

export async function registerPrescription(data: any) {
  return await createPrescription(data);
}

export async function findAllPrescriptions() {
  return await getAllPrescriptions();
}

export async function findPrescriptionById(id: string) {
  return await getPrescriptionById(id);
}

export async function editPrescription(id: string, data: any) {
  return await updatePrescription(id, data);
}

export async function removePrescription(id: string) {
  return await deletePrescription(id);
}