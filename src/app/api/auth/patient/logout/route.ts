import { logoutPatient } from "@/app/controllers/patient.controller"


export function GET() {
    return Response.json ({
        message : "Logout Route"
    })
}



export async function POST() {
    return await logoutPatient()
}
































