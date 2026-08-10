import { createDoctorController, getDoctorsController } from "@/app/controllers/doctor.controller";


export async function GET() {
  return getDoctorsController();
}




export async function POST(req: Request) {
  return createDoctorController(req);
}