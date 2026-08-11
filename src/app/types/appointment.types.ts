// src/app/types/appointment.types.ts

export interface CreateAppointmentData {
  doctorId: string;
  patientId: string;
  appointmentDate: Date;
  appointmentTime: string;
}