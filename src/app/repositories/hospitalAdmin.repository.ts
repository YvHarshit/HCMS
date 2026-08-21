import HospitalAdmin from "@/models/HospitalAdmin";
import { hospitalAdminData } from "../types/hospitalAdmin.types";

export async function findHospitalAdminByEmail(email: string) {    
  return await HospitalAdmin.findOne({ email });
}

export async function createHospitalAdmin(data: hospitalAdminData) {    
  return await HospitalAdmin.create(data);
}