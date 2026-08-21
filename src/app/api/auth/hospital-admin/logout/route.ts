
import { logoutHospitalAdminController } from "@/app/controllers/hospitalAdmin.controller";

export async function POST() {
  return await logoutHospitalAdminController();
}
