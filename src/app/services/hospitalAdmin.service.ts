import HospitalAdmin from "@/models/HospitalAdmin";
import { hospitalAdminData } from "../types/hospitalAdmin.types";
import bcrypt from "bcryptjs";


export async function registerHospitalAdmin(data: hospitalAdminData) {
    try {
        const existingAdmin = await HospitalAdmin.findOne({ email: data.email });
        if (existingAdmin) {
            throw new Error("Hospital admin with this email already exists");
        }


        const hashedPassword = await bcrypt.hash(data.password, 10);
        
          const hospitalAdmin = await HospitalAdmin.create({
            ...data,
            email: data.email.toLowerCase(),
            password: hashedPassword,   
          });

          console.log(hospitalAdmin)

           const hospitalAdminObject = hospitalAdmin.toObject();

  const { password, ...hospitalAdminWithoutPassword } = hospitalAdminObject;

  return hospitalAdminWithoutPassword;



    } catch (error) {
        console.error("Error registering hospital admin:", error);
        throw new Error("Failed to register hospital admin");
    }
}