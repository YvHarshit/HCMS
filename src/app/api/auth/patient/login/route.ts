import { loginPatientController } from "@/app/controllers/patient.controller";

export function GET() {
    return Response.json ({
        message : "Login Route"
    })
}


export async function POST(req : Request) {
    return await loginPatientController(req) 
}