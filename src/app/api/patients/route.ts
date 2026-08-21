import { getPatientsController } from "@/app/controllers/patient.controller";



export async function GET() {
    return getPatientsController()
}

