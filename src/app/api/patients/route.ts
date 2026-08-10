import { createPatientController, getPatientsController } from "@/app/controllers/patient.controller";



export async function GET() {
    return getPatientsController()
}


export function POST(req: Request) {
    return createPatientController(req)
}