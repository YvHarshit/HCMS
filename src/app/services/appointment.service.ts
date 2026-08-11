// src/app/services/appointment.service.ts

import {createAppointment, getAllAppointments, getAppointmentsByDoctor, getAppointmentsByPatient} from "../repositories/appointment.repository";
import { CreateAppointmentData } from "../types/appointment.types";

export async function registerAppointment(data: CreateAppointmentData) {
  const appointment = await createAppointment(data);

  return appointment;
}


export async function getAppointments(filters?: {doctorId?: string; patientId?: string;}) {
  if (filters?.doctorId) {
    return getAppointmentsByDoctor(filters.doctorId);
  }

  if (filters?.patientId) {
    return getAppointmentsByPatient(filters.patientId);
  }

  return getAllAppointments();
}