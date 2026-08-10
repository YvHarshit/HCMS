//  [id] route

import { getDoctorByIdController } from "@/app/controllers/doctor.controller";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }>}) {
  return getDoctorByIdController(params);
}