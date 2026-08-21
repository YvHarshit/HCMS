import bcrypt from "bcryptjs";
import { hospitalAdminData } from "../types/hospitalAdmin.types";
import {findHospitalAdminByEmail, createHospitalAdmin} from "../repositories/hospitalAdmin.repository";

export async function registerHospitalAdmin(data: hospitalAdminData) {
  try {
    if (data.passkey !== process.env.ADMIN_PASSKEY) {
      throw new Error("Invalid passkey");
    }

    const normalizedEmail = data.email.toLowerCase();

    const existingAdmin = await findHospitalAdminByEmail(normalizedEmail);

    if (existingAdmin) {
      throw new Error(
        "Hospital admin with this email already exists"
      );
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const hospitalAdmin = await createHospitalAdmin({
      ...data,
      email: normalizedEmail,
      password: hashedPassword,
    });

    const hospitalAdminObject = hospitalAdmin.toObject();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...hospitalAdminWithoutPassword } =
      hospitalAdminObject;

    return hospitalAdminWithoutPassword;
  } catch (error) {
    console.error("Error registering hospital admin:", error);
    throw error;
  }
}



export async function loginHospitalAdmin(email: string, password: string) {
  try {
    const normalizedEmail = email.toLowerCase();

    const hospitalAdmin = await findHospitalAdminByEmail(normalizedEmail);

    if (!hospitalAdmin) {
      throw new Error("Invalid email or password");
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      hospitalAdmin.password
    );

    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }

    return hospitalAdmin;
  } catch (error) {
    console.error("Error logging in hospital admin:", error);
    throw error;
  }
}