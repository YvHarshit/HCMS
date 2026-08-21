import { loginHospitalAdminController } from "@/app/controllers/hospitalAdmin.controller";

export async function POST(req: Request) {
  return await loginHospitalAdminController(req);
}