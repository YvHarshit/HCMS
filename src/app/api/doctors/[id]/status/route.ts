import { updateDoctorStatusController } from "@/app/controllers/doctor.controller";
import { NextRequest } from "next/server";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }>}) {
  return updateDoctorStatusController(req, params);
}