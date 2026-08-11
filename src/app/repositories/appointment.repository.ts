import connectDB from "@/lib/db";
import Appointment from "@/models/Appointment";

import { CreateAppointmentData } from "../types/appointment.types";

export async function createAppointment(appointmentData: CreateAppointmentData) {
  await connectDB();

  return Appointment.create(appointmentData);
}


export async function getAllAppointments() {
  await connectDB();

  return Appointment.find()
    .populate("doctorId", "name specialization")
    .populate("patientId", "name phone")
    .sort({ appointmentDate: 1 });
}

export async function getAppointmentsByDoctor(doctorId: string) {
  await connectDB();

  return Appointment.find({ doctorId })
    .populate("doctorId", "name specialization")
    .populate("patientId", "name phone")
    .sort({ appointmentDate: 1 });
}

export async function getAppointmentsByPatient(patientId: string) {
  await connectDB();

  return Appointment.find({ patientId })
    .populate("doctorId", "name specialization")
    .populate("patientId", "name phone")
    .sort({ appointmentDate: 1 });
}