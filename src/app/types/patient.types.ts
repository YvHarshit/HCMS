export interface CreatePatientData {
  name: string;
  email: string;
  password: string;
  phone: string;
  dateOfBirth?: Date;
  gender?: "male" | "female" | "other";
  address?: string;
}