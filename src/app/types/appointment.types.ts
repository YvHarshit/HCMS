
export interface CreateAppointmentData {
  doctorId: string;
  patientId: string;
  appointmentDate: Date;
  appointmentTime: string;
}


export type AppointmentStatus = "confirmed" | "completed" | "cancelled";