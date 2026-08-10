import { getPatientByIdController } from "@/app/controllers/patient.controller";


export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  return getPatientByIdController(params);
}