export interface CreatePatientData {
  name: string;
  email: string;
  password: string;
  phone: string;
  dateOfBirth?: Date | string;
  gender?: "male" | "female" | "other";
  address?: string;
}

export interface Patient {
  _id: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth?: string;
  gender?: string;
  address?: string;
  role: string;
}